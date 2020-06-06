import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VVistaCompraPage } from './v-vista-compra.page';

const routes: Routes = [
  {
    path: '',
    component: VVistaCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VVistaCompraPageRoutingModule {}
