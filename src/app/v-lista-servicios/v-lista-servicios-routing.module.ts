import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VListaServiciosPage } from './v-lista-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: VListaServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VListaServiciosPageRoutingModule {}
