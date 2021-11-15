import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[libNextfocus]'
})
export class NextfocusDirective {

  constructor() { }
  @HostListener('keyup', ['$event']) onKeyDown(keyboardEvent: KeyboardEvent) {
    const target = keyboardEvent.target as
      | HTMLInputElement
      | HTMLTextAreaElement;
    const prvtarget = keyboardEvent.target as | HTMLInputElement |HTMLTextAreaElement;
  
   const { type } = target;
   let { nextElementSibling } = target;
    let { previousElementSibling } = prvtarget

    if(keyboardEvent.key === 'ArrowLeft'){
      try{
        (previousElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
      return;
      }
      catch{
        return
      }
    }
   
    if (!target || target.maxLength !== target.value.length) {
      if(keyboardEvent.key === 'Backspace'){
        try{
          (previousElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
        return;
        }
        catch{
          return
        }
        
      }
      else if(keyboardEvent.key === 'ArrowLeft'){
        try{
          (previousElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
        return;
        }
        catch{
          return
        }
      }
      else if(keyboardEvent.key === 'ArrowRight'){
        try{
          (nextElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
        return;
        }
        catch{
          return
        }
      }
      else if(keyboardEvent.key === 'Delete'){
        try{
          (previousElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
        return;
        }
        catch{
          return
        }
      }
      return
    }

    keyboardEvent.preventDefault();

    while (nextElementSibling) {

     if(keyboardEvent.key === 'ArrowRight'){
       try{
        (nextElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
        return;
       }
       catch{
        return
       }
      
     }
     else if(keyboardEvent.key === 'ArrowLeft' || keyboardEvent.key ==='Backspace'){
       try{
        (previousElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
        return;
       }
      catch{
        console.log("catch")
        return;
      }
     }
      if ((nextElementSibling as HTMLInputElement | HTMLTextAreaElement).type === type) {
        try{
          (nextElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
          return;
        }
        catch{
          return
        }
       
      }
      nextElementSibling = nextElementSibling?.nextElementSibling;
     
    }
  }

}
