import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CuaaBienvenidoComponent } from './components/cuaa-bienvenido/cuaa-bienvenido.component';
import {SharedModule} from "../../shared/model/shared/shared.module";


@NgModule({
  declarations: [
    CuaaBienvenidoComponent
  ],
    imports: [
        CommonModule,
        InicioRoutingModule,
        SharedModule
    ]
})
export class InicioModule { }
