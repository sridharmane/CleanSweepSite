import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CustomFormValidators } from '../../validators/custom-form-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  email: AbstractControl;

  constructor(private fb: FormBuilder, private as: AuthService) {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.required]],
      // email: ['', [Validators.required, CustomFormValidators.email]],
      password: ['', [Validators.minLength(3), Validators.required]],
      passwordConfirm: ['', [Validators.minLength(3), Validators.required]],
      type: ['', [Validators.minLength(3), Validators.required]]
    });

    this.form.valueChanges
      // .filter((value) => this.addCleanSweepForm.valid)
      .subscribe(validValue => {
        console.log(validValue);
      });
    this.email = this.form.controls['email'];
  }

  ngOnInit() {
  }

  submit(formData) {
    console.log('Submiting Form with data:', formData);

    this.as.register({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      type: formData.type
    });
  }

  cancel() {

  }

}






