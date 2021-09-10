import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.page.html',
  styleUrls: ['./novo.page.scss'],
})
export class NovoPage implements OnInit {
  public back() {
    this.location.back();
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }

}
