import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesDetailsPageRoutingModule } from './promociones-details-routing.module';

import { PromocionesDetailsPage } from './promociones-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesDetailsPageRoutingModule
  ],
  declarations: [PromocionesDetailsPage]
})
export class PromocionesDetailsPageModule {}
