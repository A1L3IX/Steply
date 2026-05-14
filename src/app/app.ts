import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
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
