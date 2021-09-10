import {Injectable} from '@angular/core';
import {map, switchMap, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

import * as firebase from 'firebase';
import {LoadingController} from "@ionic/angular";
import {AngularFireStorage} from "@angular/fire/storage";
import TaskState = firebase.storage.TaskState;
import { Task } from './task';

@Injectable({
    providedIn: 'root'
})
export class FireStorageService {
    public static USERS_KEY = 'users';
    public static FILES_KEY = 'files';
    private static TASKS_KEY = 'tasks';
    private unsubscribe: Subject<void> = new Subject<void>();

    constructor(public af: AngularFirestore, public fireStorage: AngularFireStorage, public angularAuth: AngularFireAuth,
                public loadingController: LoadingController) {
    }
    public getTasks(): Observable<Array<Task>> {
        return this.angularAuth.user
            .pipe(takeUntil(this.unsubscribe),
                switchMap(user => {
                    return this.af.collection(FireStorageService.USERS_KEY).doc(user.uid)
                        .collection<Task>(FireStorageService.TASKS_KEY).valueChanges();
                }));
    }
    public async createTask(task: Task): Promise<void> {
        const currentUser = firebase.auth().currentUser;
        task.id = this.af.createId();
        return await this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
            .collection(FireStorageService.TASKS_KEY).doc(task.id).set(task);
    }
    public async updateTask(task: Task): Promise<void> {
        const currentUser = firebase.auth().currentUser;
        return await this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
            .collection(FireStorageService.TASKS_KEY).doc(task.id).set(task);
    }

    public async deleteTask(taskId: any): Promise<void> {
        const currentUser = firebase.auth().currentUser;
        return await this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
            .collection(FireStorageService.TASKS_KEY).doc(taskId).delete();
    }
    public async sendFile(imgData: string): Promise<void> {
        const currentUser = firebase.auth().currentUser;
        const imageBytes = this.convertBase64intoUint8Array(imgData);
        const imageId = this.af.createId();

        const loading = await this.loadingController.create({
            message: 'Uploading file please wait..',
            spinner: 'bubbles'
        });
        await loading.present();

        this.fireStorage.ref(`ficheiros/${currentUser.uid}/${imageId}`)
            .put(imageBytes, {contentType: 'image/jpeg'})
            .then(async res => {
                /*
                * Only when you finish uploading, you can trigger reloading by adding new image in user relation
                * */
                if (res.state === TaskState.SUCCESS) {
                    this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
                        .collection(FireStorageService.FILES_KEY).doc(imageId).set({id: imageId}).then(() => loading.dismiss());
                }
            });
    }

    public getUserFiles(): Observable<Array<Observable<any>>> {
        return this.angularAuth.user
            .pipe(takeUntil(this.unsubscribe),
                switchMap(user => {
                    return this.af.collection(FireStorageService.USERS_KEY).doc(user.uid)
                        .collection<Photo>(FireStorageService.FILES_KEY).valueChanges()
                        .pipe(map(photos => {
                            return photos.map(photo => {
                                return this.fireStorage.ref(`ficheiros/${user.uid}/${photo.id}`).getDownloadURL();
                            });
                        }));
                }));
    }

    public unsubscribeOnLogout(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    private convertBase64intoUint8Array(imageData: string): Uint8Array {
        const raw = window.atob(imageData);
        const array = new Uint8Array(new ArrayBuffer(raw.length));
        for (let i = 0; i < raw.length; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }
}

export class Photo {
    id: string;
}
