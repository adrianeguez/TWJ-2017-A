import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: "./app.component.html" ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuario:UsuarioInt = {
    nombre:"Adrian",
    apellido:"Eguez"
  };

  url:string="https://angular.io";
  src:string="https://angular.io/resources/images/logos/angular/angular.png"

  constructor(){
    console.log("Constructor");
    this.holaMundo();
    console.log(
      this.saludar(this.usuario.nombre,
      this.usuario.apellido
    ));
  }

  holaMundo(){
    console.log("Hola mundo");
  }
  saludar(nombre:string,
          apellido?:string):string{
    return `Hola ${nombre} ${apellido}`;
  }

}




interface UsuarioInt{
  nombre:string,
  apellido:string
}

