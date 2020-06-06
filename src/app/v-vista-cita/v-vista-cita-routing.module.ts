import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VVistaCitaPage } from './v-vista-cita.page';

const routes: Routes = [
  {
    path: '',
    component: VVistaCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VVistaCitaPageRoutingModule {}
