import {ModuleContex} from "../shared/model/routing/module-contex";

export class AppModules {
  static readonly auntenticacion: ModuleContex = {
    id: "autenticacion",
    description: "Modulo encargado de iniciar secion"
  }
  static readonly inicio: ModuleContex = {
    id: "inicio",
    description: "Modulo de inicio de sesion si el login es valido"
  }
}
