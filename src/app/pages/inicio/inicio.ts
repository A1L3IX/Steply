import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit, OnDestroy {
  frases: string[] = [
    'Aprende paso a paso',
    'Comparte lo que sabes',
    'Crea tutoriales simples',
    'Enseñar es crecer',
    'El saber se comparte',
    'Aprende, crea, repite',
    'Todo empieza con un paso',
    'Tu conocimiento, tu impacto',
    'Guía a otros aprendiendo',
    'Hazlo fácil, hazlo claro',
    'Aprende haciendo',
    'Cada paso cuenta',
    'Inspira con tus tutoriales',
    'Domina lo básico primero',
    'Enseñar nunca fue tan fácil',
    'Convierte ideas en guías',
    'Aprende sin complicaciones',
    'Comparte tu experiencia',
    'El aprendizaje es continuo',
    'Construye conocimiento hoy',
    'Explica como un experto',
    'Pequeños pasos, grandes logros',
    'Aprender nunca termina',
    'Comparte tu talento',
    'Tutoriales para todos',
    'Haz visible tu conocimiento',
    'Enseña algo nuevo hoy',
    'Aprender puede ser simple',
    'Ideas que ayudan',
    'Crea contenido útil',
    'Todo conocimiento suma',
    'Comparte tus mejores trucos',
    'Hazlo entendible',
    'Miles de tutoriales en un lugar',
    'Tu experiencia importa',
    'Aprende a tu ritmo',
    'Conocimiento al alcance',
    'Crea, enseña e inspira',
    'La mejor forma de aprender',
    'Sube tu primer tutorial',
    'Cada guía ayuda',
    'Comparte paso a paso',
    'Aprender juntos es mejor',
    'Haz crecer tus habilidades',
    'Explica lo que amas',
    'Aprende algo nuevo cada día',
    'Tutoriales claros y rápidos',
    'Tu guía puede cambiar algo',
    'Enseña desde la experiencia',
    'Descubre nuevas habilidades',
    'Empieza a enseñar hoy',
    'Aprender es avanzar',
    'Comparte soluciones reales',
    'Haz fácil lo difícil',
    'Todo experto empezó aprendiendo',
    'Explica, comparte, inspira',
    'Más conocimiento, más oportunidades',
    'Sube ideas que ayuden',
    'Cualquier persona puede enseñar',
    'La práctica crea expertos',
    'Un tutorial puede ayudar mucho',
    'Comparte tu manera de hacerlo',
    'Haz crecer la comunidad',
    'Aprender abre puertas',
    'Transforma experiencia en enseñanza',
    'Crea tutoriales increíbles',
    'Explica cada detalle',
    'Tu conocimiento tiene valor',
    'Aprende sin límites',
    'Descubre nuevas formas de crear',
    'Comparte lo que te funciona',
    'Haz simples las ideas complejas',
    'Conecta enseñando',
    'Cada tutorial deja huella',
    'Enseña con claridad',
    'Aprender empieza aquí',
    'Tu próximo aprendizaje te espera',
    'Explica con ejemplos reales',
    'Miles de personas pueden aprender de ti',
    'Haz que aprender sea fácil',
    'Crea contenido que inspire',
    'Comparte tus conocimientos con el mundo',
    'Ayuda a otros a mejorar',
    'Convierte experiencia en valor',
    'Enseñar también es aprender',
    'Todo tutorial empieza con una idea',
    'Aprende compartiendo',
    'Haz crecer tus ideas',
    'Descubre, aprende y enseña',
    'Tu guía puede inspirar',
    'Comparte conocimiento útil',
    'Aprender nunca fue tan accesible',
    'Crea algo que ayude a otros',
    'Un paso más cerca de aprender',
    'Todo se aprende paso a paso',
    'Explica mejor, aprende mejor',
    'Comparte lo que dominas',
    'Enseña desde cero',
    'Conocimiento compartido, conocimiento multiplicado'
  ];


  currentFrase: string = '';
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.setRandomFrase();
    this.intervalId = setInterval(() => {
      this.setRandomFrase();
      this.cdr.detectChanges();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private setRandomFrase() {
    const randomIndex = Math.floor(Math.random() * this.frases.length);
    if (this.frases.length > 1 && this.frases[randomIndex] === this.currentFrase) {
      this.setRandomFrase();
      return;
    }
    this.currentFrase = this.frases[randomIndex];
  }
}
