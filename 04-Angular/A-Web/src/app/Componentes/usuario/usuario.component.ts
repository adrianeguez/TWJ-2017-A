import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioClass} from "../../Classes/UsuarioClass";
import {Http} from "@angular/http";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuarioLocal:UsuarioClass;

  @Output() usuarioborrado = new EventEmitter();


  constructor(private _usuarioService:UsuarioService) { }
  ngOnInit() {  }

  eliminarUsuarioBackend(usuario:UsuarioClass,indice:number){
    this._usuarioService
      .borrar(usuario)
      .subscribe(
        (usuarioBorrado:UsuarioClass) => {
          this.usuarioborrado.emit(usuarioBorrado);
        },
        error => {
          console.log("Error",error);
        }
      )
  }

  actualizarUsuario(usuario:UsuarioClass,nombre:string){
    usuario.nombre = nombre;
    this._usuarioService.editar(usuario)
      .subscribe(
        (usuarioEditado:UsuarioClass)=>{
          this.usuarioLocal.nombre = nombre;
          this.usuarioLocal.editar = !this.usuarioLocal.editar;
        },
        err=>{
          console.log("Hubo un error",err);
        }
      );
  }





}
