import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'inicio', component: Inicio },
  { path: '**', redirectTo: '' }
];
