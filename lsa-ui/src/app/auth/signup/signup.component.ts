import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    contactNo: ['', Validators.required],
    dob: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get signupFormControls() {
    return this.signupForm.controls;
  }

  submitSignupForm() {
    console.log(this.signupForm.value)
  }

}
