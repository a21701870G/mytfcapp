import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlteraremailPage } from './alteraremail.page';

const routes: Routes = [
  {
    path: '',
    component: AlteraremailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlteraremailPageRoutingModule {}
