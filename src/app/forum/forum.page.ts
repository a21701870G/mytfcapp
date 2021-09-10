import { Component, OnInit } from '@angular/core';
import {FireStorageService} from '../fire-storage.service';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  constructor(public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public goRankingPage(): void {
    this.router.navigate(['/ranking']);
  }

  public goConteudoPage(): void {
    this.router.navigate(['/conteudo']);
  }
  public goForumPage(): void {
    this.router.navigate(['/forum']);
  }
  public goProfilePage(): void {
    this.router.navigate(['/home']);
  }
  public goTopic(): void {
    this.router.navigate(['/topic']);
  }
  public go(): void {
    this.router.navigate(['/topic']);
  }
}
