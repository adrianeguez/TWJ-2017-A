import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  estaLogeado:boolean = false;

  constructor() { }

  hacerLogin(){
    this.estaLogeado = true;
  }

  hacerLogout(){
    this.estaLogeado = false;
  }


}
