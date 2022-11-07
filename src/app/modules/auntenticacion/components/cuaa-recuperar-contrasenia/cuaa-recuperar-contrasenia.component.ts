import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {RouterService} from "../../../../shared/services/router.service";

@Component({
  selector: 'app-cuaa-recuperar-contrasenia',
  templateUrl: './cuaa-recuperar-contrasenia.component.html',
  styleUrls: ['./cuaa-recuperar-contrasenia.component.scss']
})
export class CuaaRecuperarContraseniaComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    private routerService: RouterService
  ) {
    this.form = new UntypedFormGroup({
      correo: new UntypedFormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  enviarCorreo(): void {
    this.routerService.irHome('AACU-2');
  }

  get correo(): UntypedFormControl {
    return this.form.get('correo') as UntypedFormControl;
  }

}
