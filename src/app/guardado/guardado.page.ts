import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FireStorageService} from '../fire-storage.service';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guardado',
  templateUrl: './guardado.page.html',
  styleUrls: ['./guardado.page.scss'],
})
export class GuardadoPage implements OnInit {

  constructor(private location: Location,  public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public back() {
    this.location.back();
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
  public goGestao(): void {
    this.router.navigate(['/gestao']);
  }
}
