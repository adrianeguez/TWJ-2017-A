import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class EstaLogeadoService implements CanActivate {

  constructor(private _authService:AuthService,
              private _router:Router) { }

  canActivate(){
    console.log("Intentando Entrar a la Vista");

    if(this._authService.estaLogeado){
      return true
    }else {
      this._router.navigate(["login"]);
      return false
    }
  }
}
