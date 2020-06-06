import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VVistaMedicoPageRoutingModule } from './v-vista-medico-routing.module';

import { VVistaMedicoPage } from './v-vista-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VVistaMedicoPageRoutingModule
  ],
  declarations: [VVistaMedicoPage]
})
export class VVistaMedicoPageModule {}
