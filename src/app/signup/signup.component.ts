import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { FormValidators } from './form.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      FormValidators.isContainSpace,
     
    ],
    FormValidators.isUnique),
    password: new FormControl('',Validators.required)
  });

  get username(){
    return this.form.get('username');
  }
  constructor() { }

  ngOnInit() {
  }

}
