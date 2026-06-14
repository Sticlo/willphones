import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'audifonos',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryComponent),
    data: { category: 'audifonos' },
  },
  {
    path: 'cargadores',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryComponent),
    data: { category: 'cargadores' },
  },
  {
    path: 'teclados',
    loadComponent: () => import('./pages/category/category').then(m => m.CategoryComponent),
    data: { category: 'teclados' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
