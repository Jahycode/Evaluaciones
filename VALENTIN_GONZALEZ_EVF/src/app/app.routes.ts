import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'avisos-page',
    pathMatch: 'full',
  },
  {
    path: 'formulario-page',
    loadComponent: () => import('./paginas/formulario-page/formulario-page.page').then( m => m.FormularioPage)
  },
  {
    path: 'avisos-page',
    loadComponent: () => import('./paginas/avisos-page/avisos-page.page').then( m => m.AvisosPage)
  },
];
