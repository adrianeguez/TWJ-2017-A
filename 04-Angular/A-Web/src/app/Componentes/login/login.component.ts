import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../token.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string;
  password:string;

  constructor(private _tokenService:TokenService,
              private _authService:AuthService) { }

  ngOnInit() {
    console.log(this._tokenService.token)
  }

  logearse(){
    this._authService.hacerLogin(this.correo,this.password);
  }

  desLogearse(){
    this._authService.hacerLogout();
  }

}
