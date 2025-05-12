import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'livros', 
    pathMatch: 'full' 
  },
  {
    path: 'livros',
    loadComponent: () => import('./modules/livros/livros.component').then(m => m.LivrosComponent),
  },
  {
    path: 'autores',
    loadComponent: () => import('./modules/autores/autores.component').then(m => m.AutoresComponent),
  },
  {
    path: 'assuntos',
    loadComponent: () => import('./modules/assuntos/assuntos.component').then(m => m.AssuntosComponent),
  },
  {
    path: 'relatorios',
    loadComponent: () => import('./modules/relatorios/relatorios.component').then(m => m.RelatoriosComponent),
  },
  { 
    path: '**', 
    redirectTo: 'livros' 
  }
];