import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";



import 'rxjs/add/operator/map';




import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Classes/UsuarioClass";
import {Form} from "@angular/forms";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Adrian";

  usuarios:UsuarioClass[] = [];

  nuevoUsuario:UsuarioClass = new UsuarioClass("");

  planetas : PlanetaStarWarsInterface[] = []

  // planetas2 : Array<PlanetaStarWars> =  []



  //command + a  y luego command command+alt+l

  arregloUsuarios = [
    {
      nombre: "Adrian",
      apellido: "Eguez",
      conectado:true
    }, {
      nombre: "Mashi",
      apellido: "Correa",
      conectado:true
    }, {
      nombre: "Abdala",
      apellido: "Bucaram",
      conectado:false
    }, {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado:true
    }]

  constructor(private _usuarioService:UsuarioService) {

    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }

  ngOnInit() {
    //Esta listo el componente

    this._usuarioService.buscarTodos()
      .subscribe(
        (usuarios:UsuarioClass[]) => {
          this.usuarios = usuarios.map(
            (usuario:UsuarioClass)=>{
              usuario.editar = false;
              return usuario;
            }
          );
          /*
          //anadir propiedades a objetos

           let objeto1:any = {
           prop1:1,
           prop2:2
           }

           objeto1.prop3 = 3;
           */
        },
        error=>{
          console.log("Error: ",error)
        }
      )

  }

  cambiarNombre(): void {
    console.log("Entro");

    this.nombre = "Rafico a Lenin";

  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);


    this.nombre = nombreEtiqueta.value;

  }

  cargarPlanetas(){
    /*
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.planetas = respuesta.results;

          this.planetas = this.planetas.map(
            (planeta)=>{

              planeta.imagenURL = "/assets/Imagenes/"+planeta.name+'.jpg';

              return planeta;


            }
          );

          //Arreglo que tengo
          // MUTARLE
          // MISMO ARREGLO CON UN NUEVO ATRIBUTO
          // IMAGEN



        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
      */
  }

  crearUsuario(UsuarioFormulario){

    let usuarioACrearse:UsuarioClass =
      new UsuarioClass(UsuarioFormulario.value.nombre,"123456");
    /*
    let usuario = {
      nombre:"valor",
      id:undefined,
      createdAt:undefined,
      updatedAt:undefined,
      editar:undefined
    }
    */
    this._usuarioService.crear(usuarioACrearse)
      .subscribe(
        (usuarioCreado:UsuarioClass) => {
          this.usuarios.push(usuarioCreado);
          this.nuevoUsuario = new UsuarioClass();
        },
        error => {
          console.log("Error",error);
        }
      )
  }

  // este metodo se ejecuta con un evento del componente hijo

  //  (usuarioBorrado)="eliminarUsuario($event)"

  eliminarUsuarioFrontEnd(usuario:UsuarioClass){
    let indice = this.usuarios.indexOf(usuario);
    this.usuarios.splice(indice,1);

  }


}














