import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gestion-citas',
    loadComponent: () => import('./paginas/gestion-citas/gestion-citas.page').then( m => m.GestionCitasPage)
  },
  {
    path: 'pagina-configuracion',
    loadComponent: () => import('./paginas/pagina-configuracion/pagina-configuracion.page').then( m => m.PaginaConfiguracionPage)
  },
];
