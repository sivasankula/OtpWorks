import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otp-ui-verify';
  otp = {
    otp_title : 'Enter OTP',
    otp_subtitle : 'OTP will be sent to your registered mobile number, please verify...',
    otp_button_label : 'Verify OTP',
    otp_count : 6
  }
  recieveOTP(event:any){
    console.log(event)
  }
}
