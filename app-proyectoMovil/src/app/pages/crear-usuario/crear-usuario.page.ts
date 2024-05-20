import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';
  mdl_contrasena2: string = '';
  mdl_nombre: string = '';
  mdl_apellidoP: string = '';
  mdl_apellidoM: string = '';
  mdl_correoCliente: string = '';
  mdl_edad: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  crearUsuario(){

  }
  atras(){
    this.router.navigate(['login'])
  }
}
