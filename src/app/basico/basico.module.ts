import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { BasicoPageRoutingModule } from './basico-routing.module';

import { BasicoPage } from './basico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicoPageRoutingModule
  ],
  declarations: [BasicoPage]
})
export class BasicoPageModule {}
