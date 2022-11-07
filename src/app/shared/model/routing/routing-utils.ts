import {ModuleContex} from "./module-contex";
import {RouteContext} from "./route-context";

export class RouterUtils{
  static getRoute(module: ModuleContex, route: RouteContext | null, suffix = ''): string{
    return '/' + module.id + (route?.uri || '') + suffix;
  }
}
