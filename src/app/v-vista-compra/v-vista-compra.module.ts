import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VVistaCompraPageRoutingModule } from './v-vista-compra-routing.module';

import { VVistaCompraPage } from './v-vista-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VVistaCompraPageRoutingModule
  ],
  declarations: [VVistaCompraPage]
})
export class VVistaCompraPageModule {}
