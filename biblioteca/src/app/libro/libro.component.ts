import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
}
@Component({
  selector: 'app-libro',
  imports: [FormsModule],
  styleUrl: './libro.component.css',
  templateUrl: './libro.component.html'
})
export class LibroComponent {
  libros: Libro[] = [];

  titulo = '';
  autor = '';
  idEditar = -1;

  constructor(private router: Router) {
    if (localStorage.getItem('sesionBasica') !== 'si') {
      this.router.navigate(['/login']);
      return;
    }

    const datos = localStorage.getItem('libroBasico');
    if (datos !== null) {
      this.libros = JSON.parse(datos);
    }
  }

  guardar() {
    if (this.idEditar === -1) {
      if (this.titulo.trim() === '' || this.autor.trim() === '') {
        alert("Ingrese todos los datos correctamente.")
        return;
      }

      let idNuevo = 1;
      for (const l of this.libros) {
        if (l.id >= idNuevo) {
          idNuevo = l.id + 1;
        }
      }

      const nuevoLibro: Libro = {
        id: idNuevo,
        titulo: this.titulo.trim(),
        autor: this.autor.trim()
      };

      this.libros.push(nuevoLibro);
    } else {
      this.libros[this.idEditar].titulo = this.titulo.trim();
      this.libros[this.idEditar].autor= this.autor.trim();
    }
    this.guardarEnLS();
    this.limpiar();
  }

  limpiar() {
    this.titulo = '';
    this.autor = '';
    this.idEditar = -1;
  }

  editar(i: number) {
    this.idEditar = i;
    this.titulo = this.libros[i].titulo;
    this.autor = this.libros[i].autor;
  }

  guardarEnLS() {
    localStorage.setItem('libroBasico', JSON.stringify(this.libros));
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
    localStorage.removeItem('sesionBasica');
  }
}
