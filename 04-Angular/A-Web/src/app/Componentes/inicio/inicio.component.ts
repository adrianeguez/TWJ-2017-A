import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Adrian";

  planetas : PlanetaStarWars[] =[];


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

  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }

  ngOnInit() {
    //Esta listo el componente
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



        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }

}


interface PlanetaStarWars{
  name:string,
}





