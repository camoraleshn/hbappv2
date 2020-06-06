import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VListaMedicosPage } from './v-lista-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: VListaMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VListaMedicosPageRoutingModule {}
