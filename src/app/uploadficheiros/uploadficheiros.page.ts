import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import * as firebase from 'firebase';
import TaskState = firebase.storage.TaskState;
import {AngularFirestore} from '@angular/fire/firestore';
import {FireStorageService} from '../fire-storage.service';
import {IonItemSliding, LoadingController} from '@ionic/angular';
import {AngularFireStorage} from '@angular/fire/storage';
import { Task } from '../task';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {FireAuthService} from "../fire-auth.service";

@Component({
    selector: 'app-uploadficheiros',
    templateUrl: './uploadficheiros.page.html',
    styleUrls: ['./uploadficheiros.page.scss'],
})
export class UploadficheirosPage implements OnInit {
    private static USERS_KEY: any;
    public tasks: Observable<Array<Task>>;
    loadImageFromDevice(event) {

        const file = event.target.files[0];

        const reader = new FileReader();

        reader.readAsArrayBuffer(file);

        reader.onload = async () => {
            const currentUser = firebase.auth().currentUser;
            const imageBytes = new Uint8Array((reader.result as ArrayBuffer));
            const imageId = this.af.createId();

            const loading = await this.loadingController.create({
                message: 'Uploading file please wait..',
                spinner: 'bubbles'
            });
            await loading.present();

            this.fireStorage.ref(`ficheiros/${currentUser.uid}/${imageId}`)
                .put(imageBytes, {contentType: file.type})
                .then(async res => {
                    /*
                    * Only when you finish uploading, you can trigger reloading by adding new image in user relation
                    * */
                    if (res.state === TaskState.SUCCESS) {
                        this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
                            .collection(FireStorageService.FILES_KEY).doc(imageId).set({id: imageId})
                            .then(() => loading.dismiss());
                    }
                });

        };

        reader.onerror = (error) => {

            //handle errors

        };
    };
    public async addItem(): Promise<void> {
        const theNewTask: string = prompt('New Task');
        if (theNewTask !== '') {
            const t: Task = {title: theNewTask, status: 'open'};
            await this.fireStorageService.createTask(t);
        }
    }

    public async markAsDone(slidingItem: IonItemSliding, task: Task): Promise<void> {
        task.status = 'done';
        await this.fireStorageService.updateTask(task);
        return await slidingItem.close();
    }

    public async removeTask(slidingItem: IonItemSliding, task: Task, index: number): Promise<void> {
        task.status = 'removed';
        await this.fireStorageService.deleteTask(task.id);
        return await slidingItem.close();
    }

    public back() {
        this.location.back();
    }

    constructor(private location: Location, public af: AngularFirestore,
                public fireStorage: AngularFireStorage, public loadingController: LoadingController, private router: Router, public fireStorageService: FireStorageService, private authService: FireAuthService) {
    }


    ngOnInit() {
    }
}
