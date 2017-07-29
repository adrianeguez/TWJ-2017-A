import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UsuarioClass} from "../Classes/UsuarioClass";
import 'rxjs/add/operator/map';
import {MasterUrlService} from "./master-url.service";


@Injectable()
export class UsuarioService {

  url:string;
  modelo = 'Usuario';

  constructor(private _http:Http,
              private _masterUrlService:MasterUrlService) {
    this.url = this._masterUrlService.url + this.modelo;
  }

  crear(usuario:UsuarioClass){
    let datosAEnviar = {
      nombre:usuario.nombre,
      password:usuario.password
    };
    return this._http
      .post(this.url,datosAEnviar)
      .map(res => {
        return res.json()
      })
  }

  borrar(usuario:UsuarioClass){
    return this._http
      .delete(this.url+`/${usuario.id}`)
      .map(res => {
        return res.json()
      })
  }

  editar(usuario:UsuarioClass){
    let datosAEnviar = {
      nombre:usuario.nombre
    };
    return this._http
      .put(this.url+`/${usuario.id}`,datosAEnviar)
      .map(res => {
        return res.json()
      })
  }

  buscarUnoPorId(id:number){
    return this._http
      .get(this.url+`/${id}`)
      .map(res => {
        return res.json()
      })
  }

  buscarTodos(){
    return this._http
      .get(this.url)
      .map(res => {
        return res.json()
      })
  }

}
