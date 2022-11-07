import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../../services/auth.service";
import {UsersService} from "../../../../services/users.service";
import {ActivatedRoute} from "@angular/router";
import {RouterService} from "../../../../shared/services/router.service";


@Component({
  selector: 'app-cuaa-iniciar-sesion',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  form: UntypedFormGroup;
  token = '';
  errorInvalidUser = false
  infoCorreo = false;

  constructor(
    private AuthService: AuthService,
    private UserService: UsersService,
    private activeRoute: ActivatedRoute,
    private routerService: RouterService
  ) {
    this.activeRoute.queryParams
      .subscribe(params => {
          if (params['queryParamsObject'] === 'AACU-2') {
            this.infoCorreo = true;
          }
        }
      );

    this.form = new UntypedFormGroup({
      correo: new UntypedFormControl(null, [Validators.required]),
      contrasenia: new UntypedFormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.form)
    if (this.form.valid) {
      this.AuthService.login(this.correo.value, this.contrasenia.value).subscribe(
        (data) => {
          this.token = data.acces_token;
          this.errorInvalidUser = false;
          this.routerService.irBienvenido();
        },
        error => {
          this.errorInvalidUser = true
          console.error(error)
        }
      )
    }
    this.form.markAllAsTouched();
  }

  recuperarContrasenia(){
    this.routerService.irRecupararContrasenia();
  }

  get correo(): UntypedFormControl {
    return this.form.get('correo') as UntypedFormControl;
  }

  get contrasenia(): UntypedFormControl {
    return this.form.get('contrasenia') as UntypedFormControl;
  }


}
