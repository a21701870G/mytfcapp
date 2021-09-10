import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControloPage } from './controlo.page';

const routes: Routes = [
  {
    path: '',
    component: ControloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControloPageRoutingModule {}
