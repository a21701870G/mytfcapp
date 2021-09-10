import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadficheirosPage } from './uploadficheiros.page';

const routes: Routes = [
  {
    path: '',
    component: UploadficheirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadficheirosPageRoutingModule {}
