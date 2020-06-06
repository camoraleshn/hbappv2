import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)},
  {
    path: 'user-data',
    loadChildren: () => import('./pages/user-data/user-data.module').then( m => m.UserDataPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu', //canActivate: [AuthGuard],
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'citas-details', //canActivate: [AuthGuard],
    loadChildren: () => import('./pages/citas-details/citas-details.module').then( m => m.CitasDetailsPageModule)
  },
  {
    path: 'perfil-doctor', //canActivate: [AuthGuard],
    loadChildren: () => import('./pages/perfil-doctor/perfil-doctor.module').then( m => m.PerfilDoctorPageModule)
  },
  {
    path: 'mis-citas',
    loadChildren: () => import('./pages/mis-citas/mis-citas.module').then( m => m.MisCitasPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ver-servicio',
    loadChildren: () => import('./ver-servicio/ver-servicio.module').then( m => m.VerServicioPageModule)
  },  {
    path: 'v-lista-medicos',
    loadChildren: () => import('./v-lista-medicos/v-lista-medicos.module').then( m => m.VListaMedicosPageModule)
  },
  {
    path: 'v-lista-servicios',
    loadChildren: () => import('./v-lista-servicios/v-lista-servicios.module').then( m => m.VListaServiciosPageModule)
  },
  {
    path: 'v-lista-dependientes',
    loadChildren: () => import('./v-lista-dependientes/v-lista-dependientes.module').then( m => m.VListaDependientesPageModule)
  },
  {
    path: 'v-lista-especialidades',
    loadChildren: () => import('./v-lista-especialidades/v-lista-especialidades.module').then( m => m.VListaEspecialidadesPageModule)
  },
  {
    path: 'v-vista-servicio',
    loadChildren: () => import('./v-vista-servicio/v-vista-servicio.module').then( m => m.VVistaServicioPageModule)
  },
  {
    path: 'v-vista-compra',
    loadChildren: () => import('./v-vista-compra/v-vista-compra.module').then( m => m.VVistaCompraPageModule)
  },
  {
    path: 'v-vista-medico',
    loadChildren: () => import('./v-vista-medico/v-vista-medico.module').then( m => m.VVistaMedicoPageModule)
  },
  {
    path: 'v-vista-cita',
    loadChildren: () => import('./v-vista-cita/v-vista-cita.module').then( m => m.VVistaCitaPageModule)
  },
  {
    path: 'v-vista-pago',
    loadChildren: () => import('./v-vista-pago/v-vista-pago.module').then( m => m.VVistaPagoPageModule)
  },
  {
    path: 'v-confirmacion',
    loadChildren: () => import('./v-confirmacion/v-confirmacion.module').then( m => m.VConfirmacionPageModule)
  }


  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
