import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-otp-ui',
  templateUrl:'./otp-ui.component.html',
  styleUrls: ['./otp-ui.component.scss']
})
export class OtpUiComponent implements OnInit {

  @Input()
  otp = {
    otp_title : '',
    otp_subtitle : '',
    otp_button_label :'',
    otp_count : 0,
    otp_color:'',
    width:''
  }
  color:any;
  width:any;
  @Output() otpSent : EventEmitter<any> = new EventEmitter;

  loginForm!: FormGroup;

  arr:any = [0]
  constructor() {
  }
  
  ngOnInit(){
    this.color=this.otp.otp_color;
  this.width=this.otp.width;
    this.arr.pop()
    this.loginForm = new FormGroup({  })
    for(let i=0; i<this.otp?.otp_count;i++){
      
      this.arr.push(this.getFormConntrol(i));
      this.loginForm.addControl(this.getFormConntrol(i), new FormControl('',Validators.required))
    }
  }
  

  getFormConntrol(index:number){
    return `crtl${index}`;
  }
  sublogin() {
    this.otpSent.emit(this.loginForm.value)
  }
  changeBackground(): string {
    return this.color;
}
changeWidth():string{
return this.width;
}
}
