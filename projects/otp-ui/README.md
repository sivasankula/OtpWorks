# OTP angular UI component 
 #### `A fully customizable, one-time password input component with Angular.`
 #### `Values of every input parameter in otp object can be changed as per user requirement, if not default values will be considered.`

## Module
#### import { `OtpUiModule` } from `'otp-ui'`;

## Include in module Section
#### imports: [&nbsp;
    ....
 #### `OtpUiModule`&nbsp;
#### ]

## Selector

#### `<lib-otp-ui></lib-otp-ui>`

## Input Parameters
 ### otp = {   
   #### `otp_title : 'Enter the OTP', => title to be displayed` &nbsp;
   #### `otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify', => subtitle to be displayed` &nbsp;
   #### `buttonText : 'Validate OTP', => button label to be displayed` &nbsp;
   #### `length : 5, => number of OTP input fields to be displayed` &nbsp;
   ### styles : {
   #### `cardWidth :'50%' => width of the card to be displayed` &nbsp;
   #### `backgroundColor:'gray',=> Background color of the card to be displayed`&nbsp;
   #### `buttonColor:'blue', => Color of the button to be displayed` &nbsp;
   #### `buttonTextColor:'white', => Text color on the button to be displayed` &nbsp;
   #### `head_color:'black', => Text color of the title to be displayed` &nbsp;
   #### `sub_head_color:'black', => Text color of the sub-title to be displayed` &nbsp;
   ### }  
  ### }

## Output Parameters
#### `otpSent: object => Returns Entered values in `object` format`

#### `{crtl0: '7', crtl1: '9', crtl2: '9', crtl3: '5', crtl4: '9'}`

## Example usage
#### `<lib-otp-ui [otp]="otp" (otpSent)="receiveOTP($event)"></lib-otp-ui>`


### Output Example

![alt text](https://github.com/sivasankula/OtpWorks/blob/07eb06867b2a131844804d7c12ff303edf60f4f7/projects/otp-ui/newOtpUI.PNG?raw=true)


## Example Usage
Example 1: app.component.ts
  #### `custom_otp_config = {` &nbsp;
  ####  `length : 5,`&nbsp;
  ####  `otp_title : 'Enter OTP',`&nbsp;
  ####  `otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify',`&nbsp;
  ####  `buttonText : 'Validate OTP',`&nbsp;
  ####  `styles{`
  ####   ` backgroundColor:'orange'`&nbsp;
  ####  `}`&nbsp;
  #### `}`&nbsp;

  
![alt text](https://github.com/sivasankula/OtpWorks/blob/59bd29eaa8aa95a2745ab874c7a6aab1ef5e8636/projects/otp-ui/customorage.PNG?raw=true)


Example 2: app.component.ts
  #### `custom_otp_config = {`&nbsp;
####  `length : 4,`&nbsp;
  #### `otp_title : 'Enter OTP',`&nbsp;
  ####  `otp_subtitle : 'OTP will be sent to your registered mobile number, Please verify',`&nbsp;
  ####  `buttonText : 'Submit OTP',`&nbsp;
  ####  `styles{`
  ####    `buttonColor:'ForestGreen',`&nbsp;
  ####    `head_color:'ForestGreen'`&nbsp;
  ####  `}`&nbsp;
  #### `}`&nbsp;

  
![alt text](https://github.com/sivasankula/OtpWorks/blob/59bd29eaa8aa95a2745ab874c7a6aab1ef5e8636/projects/otp-ui/example2.PNG?raw=true)
