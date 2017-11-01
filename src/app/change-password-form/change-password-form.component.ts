import { ChangePasswordValidators } from './change-password-validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form:FormGroup
  constructor(fb: FormBuilder){
   this.form = fb.group({
     oldPassword :['', 
      Validators.required, 
      ChangePasswordValidators.shouldBeCorrectOldPassword
    ],
     newPassword :['', 
     Validators.required],
     passwordConfirm :['', Validators.required]     
   },{
     validator: ChangePasswordValidators.passwordsShouldMatch
   });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }
  login(){
    console.log("login()"); 
  }

}
