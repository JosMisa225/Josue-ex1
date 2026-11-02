import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  usuario = '';
  clave = '';

  constructor(private router: Router) { }

  iniciarSesion() {
    if (this.usuario === 'admin123' && this.clave === '123456') {
      localStorage.setItem('sesionBasica', 'si');
      this.router.navigate(['/libro']);
    } else {
      alert('Usuario o clave incorrectos');
    }
  }
}
