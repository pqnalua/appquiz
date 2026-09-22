import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvancadoPage } from './avancado.page';

const routes: Routes = [
  {
    path: '',
    component: AvancadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvancadoPageRoutingModule {}
