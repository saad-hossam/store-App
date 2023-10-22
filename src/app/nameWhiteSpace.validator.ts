import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';    
export class NameWhiteSpace {  
    static noSpaceAllowed(control: AbstractControl) : ValidationErrors | null {  
        if((control.value as string).indexOf(' ') >=0){  
            return {noSpaceAllowed: true}  
        }  
    
        return null;  
    }  

    
    static  validatepassword(control: AbstractControl) : ValidationErrors | null { 
        var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@*$#])./;
       return {validatepassword:true}


    }

    static MatchValidator(source: string, target: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const sourceCtrl = control.get(source);
          const targetCtrl = control.get(target);
    
          return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
            ? { mismatch: true }
            : null;
        };
      }

}