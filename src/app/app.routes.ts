import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', redirectTo: '' }
];
