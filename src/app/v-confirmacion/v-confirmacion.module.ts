import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VConfirmacionPageRoutingModule } from './v-confirmacion-routing.module';

import { VConfirmacionPage } from './v-confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VConfirmacionPageRoutingModule
  ],
  declarations: [VConfirmacionPage]
})
export class VConfirmacionPageModule {}
