import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {

    this.rutaActiva.params.subscribe(
      params=>{
        console.log("Parametros en pagina 21:",params);
      }
    )

  }

}
