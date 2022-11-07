import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SharedModule { }
