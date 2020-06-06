import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VListaEspecialidadesPage } from './v-lista-especialidades.page';

const routes: Routes = [
  {
    path: '',
    component: VListaEspecialidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VListaEspecialidadesPageRoutingModule {}
