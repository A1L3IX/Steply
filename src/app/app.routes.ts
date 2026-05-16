import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Inicio } from './pages/inicio/inicio';
import { Calendario } from './pages/calendario/calendario';
import { Creador } from './pages/creador/creador';
import { Pomodoro } from './pages/pomodoro/pomodoro';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'inicio', component: Inicio },
  { path: 'calendario', component: Calendario },
  { path: 'creador', component: Creador },
  { path: 'pomodoro', component: Pomodoro },
  { path: '**', redirectTo: '' }
];
