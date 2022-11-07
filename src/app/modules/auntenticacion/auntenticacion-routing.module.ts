import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuntenticacionRoutes} from "./routing/auntenticacion-routes";
import {LoginComponent} from "./components/cuaa-iniciar-sesion/login.component";
import {RouterUtils} from "../../shared/model/routing/routing-utils";
import {AppModules} from "../../routing/app-modules";
import {
  CuaaRecuperarContraseniaComponent
} from "./components/cuaa-recuperar-contrasenia/cuaa-recuperar-contrasenia.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouterUtils.getRoute(AppModules.auntenticacion, AuntenticacionRoutes.iniciarSesion)
  },
  {
    path: AuntenticacionRoutes.iniciarSesion.uri.slice(1),
    component: LoginComponent
  },
  {
    path: AuntenticacionRoutes.recuperarContrasenia.uri.slice(1),
    component: CuaaRecuperarContraseniaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuntenticacionRoutingModule { }
