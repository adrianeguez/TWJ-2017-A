import { Injectable } from '@angular/core';
import {ApiAuthService} from "./api-auth.service";
import {TokenService} from "../token.service";

@Injectable()
export class AuthService {

  estaLogeado:boolean = false;

  constructor(
    private _apiAuthService:ApiAuthService,
  private _tokenService:TokenService) {

  }

  hacerLogin(correo,password){

    /*
    * Logica login
    * */

    this._apiAuthService.logIn(correo,password)
      .subscribe(
        token => {
          console.log(token.text());
          this._tokenService.token = token.text();
          this.estaLogeado = true;
        },
        errorServidor => {
          console.log('Error',errorServidor);
        }
      )



  }

  hacerLogout(){
    this._tokenService.token = "";
    this.estaLogeado = false;
  }


}
