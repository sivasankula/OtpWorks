import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  otp = {   
    otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify',
    buttonText : 'Validate OTP',
    length : 5,
    styles :{
      cardWidth:"50%",
      backgroundColor:'',
      buttonColor:'',
      buttonTextColor:'',
      sub_head_color:''
    }  
  }

  receiveOTP(event:any){
    console.log(event)
  }
}
