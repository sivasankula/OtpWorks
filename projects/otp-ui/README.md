# OTP angular UI component 
 
## Module
import { `OtpUiModule` } from `'otp-ui'`;

## Include in module Section
imports: [
    ....
    `OtpUiModule`
]

## Selector

`<lib-otp-ui></lib-otp-ui>`

## Input Parameters
 `custom_otp_config` = {
    otp_title : 'Enter OTP',
    otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify',
    otp_button_label : 'Verify OTP',
    otp_count : 5,
    otp_button_color:'green',
    otp_card_width:'40rem'
  }
#### custome_otp_config

![image](https://github.com/sivasankula/OtpWorks/blob/a1f944101a8b13dacade049030b456d2d72c5bed/projects/otp-ui/otp1.PNG?raw=true)

## Output Parameters
otpSent: object -> Returns Entered OTP value in `object` format.

`{crtl0: '1', crtl1: '3', crtl2: '4', crtl3: '5', crtl4: '6'}`

## Example usage
`<lib-otp-ui   [otp]="custom_otp_config" (otpSent)="recieveOTP($event)"></lib-otp-ui>`

`<lib-otp-ui [otp]="otp" (otpSent)="recieveOTP($event)"></lib-otp-ui>`

### Otput Example

![alt text](https://github.com/sivasankula/OtpWorks/blob/a1f944101a8b13dacade049030b456d2d72c5bed/projects/otp-ui/otp1.PNG?raw=true)