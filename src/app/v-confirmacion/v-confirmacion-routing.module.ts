import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VConfirmacionPage } from './v-confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: VConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VConfirmacionPageRoutingModule {}
