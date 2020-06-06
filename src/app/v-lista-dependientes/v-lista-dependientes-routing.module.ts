import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VListaDependientesPage } from './v-lista-dependientes.page';

const routes: Routes = [
  {
    path: '',
    component: VListaDependientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VListaDependientesPageRoutingModule {}
