import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VListaEspecialidadesPageRoutingModule } from './v-lista-especialidades-routing.module';

import { VListaEspecialidadesPage } from './v-lista-especialidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VListaEspecialidadesPageRoutingModule
  ],
  declarations: [VListaEspecialidadesPage]
})
export class VListaEspecialidadesPageModule {}
