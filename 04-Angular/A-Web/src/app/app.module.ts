
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import { EstiloComponent } from './estilo/estilo.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';


import {ModuloDeRutas} from "./routes";

import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { Pagina21Component } from './Componentes/pagina21/pagina21.component';
import { Pagina22Component } from './Componentes/pagina22/pagina22.component';
import { Pagina23Component } from './Componentes/pagina23/pagina23.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from './Componentes/login/login.component';
import {TokenService} from "./token.service";
import {UsuarioService} from "./services/usuario.service";
import {MasterUrlService} from "./services/master-url.service";


@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas,
    NgbModule.forRoot()
  ],
  providers: [
    TokenService,
    UsuarioService,
    MasterUrlService// servicios - singletons
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
