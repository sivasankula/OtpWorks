import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpUiComponent } from './otp-ui.component';
import { NextfocusDirective } from './nextfocus.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';




@NgModule({
  declarations: [
    OtpUiComponent,
    NextfocusDirective,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OtpUiComponent
  ]
})
export class OtpUiModule { }
