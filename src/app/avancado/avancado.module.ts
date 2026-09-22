import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { AvancadoPageRoutingModule } from './avancado-routing.module';

import { AvancadoPage } from './avancado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvancadoPageRoutingModule
  ],
  declarations: [AvancadoPage]
})
export class AvancadoPageModule {}
