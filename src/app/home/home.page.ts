import {Component, OnInit} from '@angular/core';

import {IonItemSliding} from '@ionic/angular';
import {FireStorageService} from '../fire-storage.service';
import {Observable} from 'rxjs';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



    constructor(public fireStorageService: FireStorageService, private authService: FireAuthService,
                private router: Router) {
    }

    public ngOnInit(): void {
    }
    public logout(): void {
        this.authService.doLogout().then(() => this.router.navigate(['/login']), err => console.log(err));
    }
    public goRankingPage(): void {
        this.router.navigate(['/ranking']);
    }
    public goSettingsPage(): void{
        this.router.navigate(['/settings'])
    }
    public goConteudoPage(): void{
        this.router.navigate(['/Conteudo'])
    }
    public goForumPage(): void{
        this.router.navigate(['/forum'])
    }
    public goProfilePage(): void{
        this.router.navigate(['/home'])
    }




}
