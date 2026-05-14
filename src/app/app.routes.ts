import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { InicioComponent } from './pages/inicio/inicio';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', redirectTo: '' }
];
