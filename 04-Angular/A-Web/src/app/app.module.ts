
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import { EstiloComponent } from './estilo/estilo.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import {RutasAppModule} from "./routes";
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';


@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    UsuarioComponent,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RutasAppModule
  ],
  providers: [
    // http
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
