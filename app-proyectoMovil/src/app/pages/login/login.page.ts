import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';


  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.router.navigate(['inicio']);
  }
  crearUsuario() {
    this.router.navigate(['crear-usuario']);
  }
  invitado(){
    this.router.navigate(['inicio']);
  }
}
