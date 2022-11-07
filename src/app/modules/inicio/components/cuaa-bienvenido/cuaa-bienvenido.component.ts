import { Component, OnInit } from '@angular/core';
import {RouterService} from "../../../../shared/services/router.service";

@Component({
  selector: 'app-cuaa-bienvenido',
  templateUrl: './cuaa-bienvenido.component.html',
  styleUrls: ['./cuaa-bienvenido.component.scss']
})
export class CuaaBienvenidoComponent implements OnInit {

  constructor(
    private routerService: RouterService
  ) { }

  ngOnInit(): void {
  }

  regresar(){
    this.routerService.irHome();
  }

}
