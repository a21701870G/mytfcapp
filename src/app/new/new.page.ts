import { Component, OnInit } from '@angular/core';
import {FireStorageService} from '../fire-storage.service';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor(private location: Location, public fireStorageService: FireStorageService, private authService: FireAuthService,
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
  public back() {
    this.location.back();
  }
  public goPaginaApostas(): void {
    this.router.navigate(['/pagina-apostas']);
  }
  public goHome(): void {
    this.router.navigate(['/home']);
  }
}
