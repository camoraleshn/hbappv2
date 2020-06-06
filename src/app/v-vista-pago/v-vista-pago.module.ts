import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VVistaPagoPageRoutingModule } from './v-vista-pago-routing.module';

import { VVistaPagoPage } from './v-vista-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VVistaPagoPageRoutingModule
  ],
  declarations: [VVistaPagoPage]
})
export class VVistaPagoPageModule {}
