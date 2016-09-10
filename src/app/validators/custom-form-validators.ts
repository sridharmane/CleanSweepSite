import { FormControl } from '@angular/forms';
export class CustomFormValidators {
    static email(fc: FormControl) {
        let EMAIL_REGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return EMAIL_REGEXP.test(fc.value) ? null : {
            emailValidator: {
                valid: false
            }
        };
    }
}