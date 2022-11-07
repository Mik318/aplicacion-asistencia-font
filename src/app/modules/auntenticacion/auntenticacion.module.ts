import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuntenticacionRoutingModule} from './auntenticacion-routing.module';
import {LoginComponent} from './components/cuaa-iniciar-sesion/login.component';
import {SharedModule} from "../../shared/model/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import { CuaaRecuperarContraseniaComponent } from './components/cuaa-recuperar-contrasenia/cuaa-recuperar-contrasenia.component';


@NgModule({
  declarations: [
    LoginComponent,
    CuaaRecuperarContraseniaComponent
  ],
    imports: [
        CommonModule,
        AuntenticacionRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ]
})
export class AuntenticacionModule {
}
