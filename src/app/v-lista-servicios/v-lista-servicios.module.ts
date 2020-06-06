import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VListaServiciosPageRoutingModule } from './v-lista-servicios-routing.module';

import { VListaServiciosPage } from './v-lista-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VListaServiciosPageRoutingModule
  ],
  declarations: [VListaServiciosPage]
})
export class VListaServiciosPageModule {}
