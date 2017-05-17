import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  template: `
  <h1>Hola</h1>
    
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuario:UsuarioInt = {
    nombre:"Adrian",
    apellido:"Eguez"
  }

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

