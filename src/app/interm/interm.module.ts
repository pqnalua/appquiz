import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { IntermPageRoutingModule } from './interm-routing.module';

import { IntermPage } from './interm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntermPageRoutingModule
  ],
  declarations: [IntermPage]
})
export class IntermPageModule {}
