import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-controlo',
  templateUrl: './controlo.page.html',
  styleUrls: ['./controlo.page.scss'],
})
export class ControloPage implements OnInit {
  public back() {
    this.location.back();
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }
}
