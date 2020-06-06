import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VListaDependientesPageRoutingModule } from './v-lista-dependientes-routing.module';

import { VListaDependientesPage } from './v-lista-dependientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VListaDependientesPageRoutingModule
  ],
  declarations: [VListaDependientesPage]
})
export class VListaDependientesPageModule {}
