import {AppComponent} from "./app.component";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";


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
        component:InicioComponent
      },
      {
        path:"pagina22",
        component:InicioComponent
      },
      {
        path:"pagina23",
        component:InicioComponent
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
