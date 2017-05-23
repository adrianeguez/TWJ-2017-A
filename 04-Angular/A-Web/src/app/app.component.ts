import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: "./app.component.html" ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuario:UsuarioInt = {
    nombre:"",
    apellido:"Eguez"
  };
  parrafo:string = "";
  background:string = "blue";

  url:string="https://angular.io";
  src:string="https://angular.io/resources/images/logos/angular/angular.png"




  constructor(){
    this.usuario.nombre = "Adrian";
    this.parrafo = "Mi mama me mima";

    setTimeout(()=>{
      this.usuario.nombre = "Vicente"

    },3000);
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

