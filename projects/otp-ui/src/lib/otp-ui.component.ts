import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-otp-ui',
  templateUrl: './otp-ui.component.html',
  styleUrls: ['./otp-ui.component.scss']
})
export class OtpUiComponent implements OnInit {

  @Input()
  otp?: any

  //mandatary
  otp_title: any;
  otp_subtitle: any;
  length: any;
  buttonText: any;

  //styles
  backgroundColor: any;
  buttonColor: any;
  buttonTextColor: any;
  head_color: any;
  sub_head_color: any
  cardWidth: any;

  @Output() otpSent: EventEmitter<any> = new EventEmitter;

  loginForm!: FormGroup;

  arr: any = []
  constructor() {
  }

  ngOnInit() {
    //mandatory initialisation
    this.otp_title = (this.otp.otp_title) ? this.otp.otp_title : "Enter the OTP";
    this.otp_subtitle = (this.otp.otp_subtitle) ? this.otp.otp_subtitle : "OTP will be sent to your registered mobile number, Please verify";
    this.buttonText = (this.otp.buttonText) ? this.otp.buttonText : "Validate OTP";
    this.length = (this.otp?.length > 3) ? this.otp.length : 4;
    this.backgroundColor = this.otp?.styles?.backgroundColor;
    this.buttonColor = this.otp?.styles?.buttonColor;
    this.cardWidth = (this.otp?.styles?.cardWidth > '40%') ? this.otp?.styles?.cardWidth: '50%';
    this.buttonTextColor = this.otp?.styles?.buttonTextColor;
    this.head_color = this.otp?.styles?.head_color;
    this.sub_head_color = this.otp?.styles?.sub_head_color;
    this.loginForm = new FormGroup({})
    for (let i = 0; i < this.length; i++) {
      this.arr.push(this.getFormConntrol(i));
      this.loginForm.addControl(this.getFormConntrol(i), new FormControl('', Validators.required))
    }
  }


  getFormConntrol(index: number) {
    return `crtl${index}`;
  }
  sublogin() {
    this.otpSent.emit(this.loginForm.value)
  }

}
