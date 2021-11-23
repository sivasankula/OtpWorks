# OTP angular UI component 
 
## Module
import { `OtpUiModule` } from `'otp-ui'`;

## Include in module Section
imports: [\
    ....\
    `OtpUiModule`\
]

## Selector

`<lib-otp-ui></lib-otp-ui>`

## Input Parameters
 `custom_otp_config` = {\
    otp_title : 'Enter OTP', -> title to be displayed\
    otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify', -> subtitle to be displayed\
    otp_button_label : 'Verify OTP',-> button label to be displayed\
    otp_count : 5, number of OTP input fields to be displayed\
    otp_button_color:'blue', -> color of the button to be displayed\
    otp_card_width:'40rem' -> width of the card to be displayed\
  }

## Output Parameters
otpSent: object -> Returns Entered OTP value in `object` format.

`{crtl0: '9', crtl1: '3', crtl2: '4', crtl3: '5', crtl4: '6'}`

## Example usage
`<lib-otp-ui   [otp]="custom_otp_config" (otpSent)="recieveOTP($event)"></lib-otp-ui>`


### Otput Example

![alt text](https://github.com/sivasankula/OtpWorks/blob/a1f944101a8b13dacade049030b456d2d72c5bed/projects/otp-ui/otp1.PNG?raw=true)