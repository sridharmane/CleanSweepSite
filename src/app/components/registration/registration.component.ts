import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CustomFormValidators } from '../../validators/custom-form-validators';

let EMAIL_REGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('passwordConfirm').value
    ? null : { 'nomatch': true };
}
function emailValidator(c: AbstractControl) {
  return EMAIL_REGEXP.test(c.get('email').value) ? null : { 'emailInvalid': true };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  email: AbstractControl;
  inProgress: boolean = false;
  errorMessage: string = '';
  statusMessage: string = '';

  constructor(private fb: FormBuilder, private as: AuthService) {
    this.form = this.fb.group({
      name: ['First LastLast', [Validators.minLength(3), Validators.required]],
      account: this.fb.group({
        email: ['first.last@firstlast.com', [Validators.required]],
        password: ['', [Validators.minLength(3), Validators.required]],
        passwordConfirm: ['', [Validators.minLength(3), Validators.required]],
        type: ['admin', [Validators.minLength(3), Validators.required]]
      }, {
          validator: passwordMatcher
        }),
    });

    // this.form.valueChanges
    // .filter((value) => this.addCleanSweepForm.valid)
    // .subscribe(validValue => {
    // console.log(validValue);
    // });
  }

  ngOnInit() {
  }

  submit(formData) {
    console.log('Submiting Form with data:', formData);
    this.inProgress = true;
    this.errorMessage = '';
    this.as.register({
      uid: null,
      name: formData.name,
      email: formData.account.email,
      password: formData.account.password,
      type: formData.account.type
    }).subscribe(success => {
      this.inProgress = false;
      this.statusMessage = success.message;
      console.log('Got in RegistrationComponent ', success);
    },
      error => {
        this.errorMessage = error;
        console.log('Got in RegistrationComponent ', error);
      });
  }

  cancel() {
    this.errorMessage = '';
  }

}






