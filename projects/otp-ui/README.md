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
    otp_count : 5
  }
#### custome_otp_config
![Screenshot](formateobj.png)



## Output Parameters
otpSent: object -> Returns Entered OTP value in `object` format.

`{crtl0: '1', crtl1: '3', crtl2: '4', crtl3: '5', crtl4: '6'}`

## Example usage
`<lib-otp-ui   [otp]="custom_otp_config" (otpSent)="recieveOTP($event)"></lib-otp-ui>`

`<lib-otp-ui [otp]="otp" (otpSent)="recieveOTP($event)"></lib-otp-ui>`

### Otput Example

![Screenshot](otp-ui.png)


## Key Words

[ otp-ui, otp-verify, one-time-password, ng-otp, ng-otp-ui, ng-otp-input, angular-otp, otp-angular]