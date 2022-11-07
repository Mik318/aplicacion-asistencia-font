import {Injectable} from '@angular/core';
import {Params, Router} from "@angular/router";
import {RouterUtils} from "../model/routing/routing-utils";
import {AppModules} from "../../routing/app-modules";
import {AuntenticacionRoutes} from "../../modules/auntenticacion/routing/auntenticacion-routes";
import {InicioRoutes} from "../../modules/inicio/routing/inicio-routes";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private pila: Array<string> = [];


  constructor(
    private router: Router
  ) {
  }

  irHome(queryParamsObject?: string) {
    this.ir(
      RouterUtils.getRoute(
        AppModules.auntenticacion,
        AuntenticacionRoutes.iniciarSesion
      ),
      {
        queryParamsObject
      }
    );
  }

  irBienvenido(){
    this.ir(
      RouterUtils.getRoute(
        AppModules.inicio,
        InicioRoutes.inicio
      )
    );
  }

  irRecupararContrasenia(){
    this.ir(
      RouterUtils.getRoute(
        AppModules.auntenticacion,
        AuntenticacionRoutes.recuperarContrasenia
      )
    );
  }

  ir(url: string, queryParamsObject?: unknown): Promise<boolean> {
    this.pila.push(this.router.url);
    console.log(this.router.url);
    return this.router.navigate([url], {
      queryParams: queryParamsObject as Params
    });
  }
}
