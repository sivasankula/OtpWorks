import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otp-ui-verify';
  otp = {
    
    otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify',
    buttonText : 'Validate OTP',
    length : 5,
    styles :{
      cardWidth:"50%",
      backgroundColor:'red',
      buttonColor:'red',
      txt_color:'red',
      head_color:'',
      sub_head_color:'red'
    }
    
  }

  receiveOTP(event:any){
    console.log(event)
  }
}
