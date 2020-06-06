import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VListaMedicosPageRoutingModule } from './v-lista-medicos-routing.module';

import { VListaMedicosPage } from './v-lista-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VListaMedicosPageRoutingModule
  ],
  declarations: [VListaMedicosPage]
})
export class VListaMedicosPageModule {}
