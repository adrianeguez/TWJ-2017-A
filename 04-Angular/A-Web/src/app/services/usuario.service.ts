import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UsuarioClass} from "../Classes/UsuarioClass";

@Injectable()
export class UsuarioService {

  url = 'http://localhost:1337/Usuario';

  constructor(private _http:Http) {

  }

  crear(usuario:UsuarioClass){
    let datosAEnviar = {
      nombre:usuario.nombre
    };
    return this._http
      .post(this.url,datosAEnviar)
  }

  borrar(usuario:UsuarioClass){
    return this._http
      .delete(this.url+`/${usuario.id}`)
  }

  editar(usuario:UsuarioClass){
    let datosAEnviar = {
      nombre:usuario.nombre
    };
    return this._http
      .put(this.url+`/${usuario.id}`,datosAEnviar)
  }

  buscarUnoPorId(id:number){
    return this._http
      .get(this.url+`/${id}`)
  }

  buscarTodos(){
    return this._http
      .get(this.url)
  }



}
