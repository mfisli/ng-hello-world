import { AbstractControl, ValidationErrors } from "@angular/forms/forms";

export class ChangePasswordValidators {
    static shouldBeCorrectOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '123'){
                    resolve({ shouldBeCorrectOldPassword : true });                    
                } else {
                    resolve(null);                    
                }
            }, 1000);
        });
    }
    static passwordsShouldMatch(control: AbstractControl) {
        // must apply at the form level
        let newPassword = control.get('newPassword');
        let passwordConfirm = control.get('passwordConfirm');

        if(newPassword.value !== passwordConfirm.value){
            return { passwordsShouldMatch: true }
        } else {
            return null;
        }
        
    }
} 