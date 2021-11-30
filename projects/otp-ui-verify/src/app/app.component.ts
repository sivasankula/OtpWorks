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
    buttonText : 'Validate OTP...',
    length : 5,
    styles :{
      cardWidth:"50%",
      backgroundColor:'red',
      buttonColor:'pink'
    }
    
  }
  otp_styles ={
    otp_button_color :'red',
    otp_card_width:'40rem',
    otp_bg_color:'yellow',
    otp_btn_text_color:''
  }
  receiveOTP(event:any){
    console.log(event)
  }
}
