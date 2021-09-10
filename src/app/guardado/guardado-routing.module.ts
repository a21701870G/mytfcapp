import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardadoPage } from './guardado.page';

const routes: Routes = [
  {
    path: '',
    component: GuardadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardadoPageRoutingModule {}
