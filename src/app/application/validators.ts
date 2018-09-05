import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmailValidators{
    static cannotContainSpaceEmail(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
            return { cannotContainSpaceEmail : true };
        
        return null;
    }
    static cannotContainSpaceName(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
            return { cannotContainSpaceName : true };
        
        return null;
    }
}    
