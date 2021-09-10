import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardadoPageRoutingModule } from './guardado-routing.module';

import { GuardadoPage } from './guardado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardadoPageRoutingModule
  ],
  declarations: [GuardadoPage]
})
export class GuardadoPageModule {}
