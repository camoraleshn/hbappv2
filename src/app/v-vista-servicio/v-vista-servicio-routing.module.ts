import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VVistaServicioPage } from './v-vista-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: VVistaServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VVistaServicioPageRoutingModule {}
