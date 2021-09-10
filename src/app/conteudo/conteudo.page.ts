import { Component, OnInit } from '@angular/core';
import {FireStorageService} from '../fire-storage.service';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],

})
export class ConteudoPage implements OnInit {

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

  public goUpload(): void {
    this.router.navigate(['/uploadficheiros']);
  }
  public goGuardado(): void {
    this.router.navigate(['/guardado']);
  }
  public goNovo(): void {
    this.router.navigate(['/novo']);
  }

}
