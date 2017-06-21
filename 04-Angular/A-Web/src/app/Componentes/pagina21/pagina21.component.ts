import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private router: Router,
              private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    //Parametros de ruta actual (HIJO)
    this.rutaActiva.params.subscribe(
      params=>{
        console.log("Parametros en pagina 21:",params);
      }
    )

    //Parametros de la ruta PAPA
    this.rutaActiva.parent.params.subscribe(
      params=>{
        console.log("Parametros de mi Papa:",params);
      }
    )

  }

}
