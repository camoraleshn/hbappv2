import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VVistaServicioPageRoutingModule } from './v-vista-servicio-routing.module';

import { VVistaServicioPage } from './v-vista-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VVistaServicioPageRoutingModule
  ],
  declarations: [VVistaServicioPage]
})
export class VVistaServicioPageModule {}
