import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private as: AuthService) {
    this.form = this.fb.group({
      email: '',
      password: ''
    });

    this.form.valueChanges
    // .filter((value) => this.addCleanSweepForm.valid)
    // .subscribe(validValue => {
    //   console.log(validValue);
    // });
  }

  ngOnInit() {
  }

  submit(formData) {
    console.log('Submiting Form with data:', formData);
    this.as.login(formData.email, formData.password);
  }

  cancel() {

  }




}
