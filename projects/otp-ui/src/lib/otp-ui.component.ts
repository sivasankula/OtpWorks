import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    otp_count : 0
  }

  @Output() otpSent : EventEmitter<any> = new EventEmitter;

  loginForm!: FormGroup;

  arr:any = [0]
  constructor() {
  }
  
  ngOnInit(){
    this.arr.pop()
    this.loginForm = new FormGroup({  })
    for(let i=0; i<this.otp?.otp_count;i++){
      
      this.arr.push(this.getFormConntrol(i));
      this.loginForm.addControl(this.getFormConntrol(i), new FormControl)
    }
  }
  

  getFormConntrol(index:number){
    return `crtl${index}`;
  }
  sublogin() {
    this.otpSent.emit(this.loginForm.value)
  }
  
}
