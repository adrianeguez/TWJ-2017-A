import {AppComponent} from "./app.component";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";
import {Pagina21Component} from "./Componentes/pagina21/pagina21.component";
import {Pagina22Component} from "./Componentes/pagina22/pagina22.component";
import {Pagina23Component} from "./Componentes/pagina23/pagina23.component";


/**
 * Created by USRDEL on 21/6/17.
 */


export const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"pagina2",
    component:Pagina2Component,
    children:[
      {
        path:"pagina21",
        component:Pagina21Component
      },
      {
        path:"pagina22",
        component:Pagina22Component
      },
      {
        path:"pagina23",
        component:Pagina23Component
      }
    ]
  }
];


/*

  [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'pagina2', component: InicioComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      //{ path: 'pagina3', component: Pagina3Component },
      //{ path: 'pagina4', component: Pagina4Component }
    ]
  }
];
*/

export const ModuloDeRutas: ModuleWithProviders =
  RouterModule.forRoot(routes);






/*


/inicio
InicioComponent

/pagina2
Pagina2Component
   /Pagina21
   /Pagina22
   /Pagina23

---------------------------

/pagina2
Pagina2Component

todos los autos


/idAuto
Mostrar Auto

/partes



/dueños

/competencias



---------------------------


 */
