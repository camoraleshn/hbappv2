import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VVistaCitaPageRoutingModule } from './v-vista-cita-routing.module';

import { VVistaCitaPage } from './v-vista-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VVistaCitaPageRoutingModule
  ],
  declarations: [VVistaCitaPage]
})
export class VVistaCitaPageModule {}
