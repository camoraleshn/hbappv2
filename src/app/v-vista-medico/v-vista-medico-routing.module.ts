import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VVistaMedicoPage } from './v-vista-medico.page';

const routes: Routes = [
  {
    path: '',
    component: VVistaMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VVistaMedicoPageRoutingModule {}
