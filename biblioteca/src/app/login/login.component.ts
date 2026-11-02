import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  usuario='';
  clave='';
  sesionIn=false;

  iniciarSesion(){
    if(this.usuario === 'admin123' && this.clave === '123456'){
      localStorage.setItem('sesionBasica', 'si');
      this.sesionIn=true;
      this.clave='';
    } else {
      alert('Usuario o clave incorrectos');
    }
  }

  cerrarsesion(){
    localStorage.removeItem('sesionBasica');
    this.sesionIn=false;
    this.usuario='';
    this.clave='';
  }
}
