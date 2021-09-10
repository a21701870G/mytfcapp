import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadficheirosPageRoutingModule } from './uploadficheiros-routing.module';

import { UploadficheirosPage } from './uploadficheiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadficheirosPageRoutingModule
  ],
  declarations: [UploadficheirosPage]
})
export class UploadficheirosPageModule {}
