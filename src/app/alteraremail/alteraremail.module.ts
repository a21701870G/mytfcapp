import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlteraremailPageRoutingModule } from './alteraremail-routing.module';

import { AlteraremailPage } from './alteraremail.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlteraremailPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AlteraremailPage]
})
export class AlteraremailPageModule {}
