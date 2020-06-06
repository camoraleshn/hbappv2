import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VVistaPagoPage } from './v-vista-pago.page';

const routes: Routes = [
  {
    path: '',
    component: VVistaPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VVistaPagoPageRoutingModule {}
