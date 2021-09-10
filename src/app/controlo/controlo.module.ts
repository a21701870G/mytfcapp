import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControloPageRoutingModule } from './controlo-routing.module';

import { ControloPage } from './controlo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControloPageRoutingModule
  ],
  declarations: [ControloPage]
})
export class ControloPageModule {}
