import {RouteContext} from "../../../shared/model/routing/route-context";

export class AuntenticacionRoutes {
  static readonly iniciarSesion: RouteContext = {
    uri: '/iniciar-sesion',
    ucname: 'Inicio de sesion'
  }
  static readonly recuperarContrasenia: RouteContext = {
    uri: '/recuperar-contrasenia',
    ucname: 'Recuparar contrasenia'
  }
}
