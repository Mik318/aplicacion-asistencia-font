import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioRoutes} from "./routing/inicio-routes";
import {CuaaBienvenidoComponent} from "./components/cuaa-bienvenido/cuaa-bienvenido.component";

const routes: Routes = [
  {
    path: InicioRoutes.inicio.uri.slice(1),
    component: CuaaBienvenidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
