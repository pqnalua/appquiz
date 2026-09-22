import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicoPage } from './basico.page';

const routes: Routes = [
  {
    path: '',
    component: BasicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicoPageRoutingModule {}
