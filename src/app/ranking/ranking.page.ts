import { Component, OnInit } from '@angular/core';

import {IonItemSliding} from '@ionic/angular';
import {FireStorageService} from '../fire-storage.service';
import {Observable} from 'rxjs';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor(public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public goRankingPage(): void {
    this.router.navigate(['/ranking']);
  }

  public goConteudoPage(): void{
    this.router.navigate(['/conteudo'])
  }
  public goForumPage(): void{
    this.router.navigate(['/forum'])
  }
  public goProfilePage(): void{
    this.router.navigate(['/profile'])
  }
  public goTopicForum(): void{
    this.router.navigate(['home'])
  }
}
