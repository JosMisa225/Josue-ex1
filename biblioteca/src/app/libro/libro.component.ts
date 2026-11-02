import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Libro{
  id: number;
  titulo: string;
  autor: string;
}
@Component({
  selector: 'app-libro',
   imports: [],
  styleUrl: './libro.component.css',
  templateUrl: './libro.component.html'
})
export class LibroComponent {
  libros : Libro [] = [];

  constructor(private router: Router) {
    if(localStorage.getItem('sesionBasica') !== 'si'){
      this.router.navigate(['/login']);
      return;
    }

    const datos = localStorage.getItem('libroBasico');
    if(datos !== null){
      this.libros = JSON.parse(datos);
    }
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
    localStorage.removeItem('sesionBasica');
  }
}
