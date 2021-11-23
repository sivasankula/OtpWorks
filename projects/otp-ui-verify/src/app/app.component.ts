import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otp-ui-verify';
  otp = {
    otp_title : 'Enter the OTP',
    otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify',
    otp_button_label : 'Validate OTP',
    otp_count : 5,
    otp_button_color :'',
    otp_card_width:'40rem'
  }
  receiveOTP(event:any){
    console.log(event)
  }
}
