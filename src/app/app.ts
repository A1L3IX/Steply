import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Estado de la vista actual: 'home', 'login', 'register'
  currentView = signal<'home' | 'login' | 'register'>('home');

  setView(view: 'home' | 'login' | 'register') {
    this.currentView.set(view);
  }
}
