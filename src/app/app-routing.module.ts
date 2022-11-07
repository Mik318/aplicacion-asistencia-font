import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppModules} from "./routing/app-modules";
import {RouterUtils} from "./shared/model/routing/routing-utils";
import {AuntenticacionRoutes} from "./modules/auntenticacion/routing/auntenticacion-routes";

const routes: Routes = [
  {
    path: AppModules.auntenticacion.id,
    loadChildren: () => import('./modules/auntenticacion/auntenticacion.module')
      .then(m => m.AuntenticacionModule)
  },
  {
    path: AppModules.inicio.id,
    loadChildren: () => import('./modules/inicio/inicio.module')
      .then(m => m.InicioModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouterUtils.getRoute(AppModules.auntenticacion, AuntenticacionRoutes.iniciarSesion)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: RouterUtils.getRoute(AppModules.auntenticacion, AuntenticacionRoutes.iniciarSesion)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
