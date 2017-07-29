import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _TokenService:TokenService) { }

  ngOnInit() {
    console.log(this._TokenService.token)
  }

}
