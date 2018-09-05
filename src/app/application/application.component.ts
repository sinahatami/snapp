import { Component } from '@angular/core';
import { trigger, transition, style, animate, } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { NgForm, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { EmailValidators } from './validators';
import { PostService } from '../post.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  animations : [
    trigger('form', [
      transition(':enter', [
        animate('1s cubic-bezier(.08,.71,.48,.47)',style({transform:'translateX(200px)', opacity: 0}))  
      ])
    ])
  ]
})
export class ApplicationComponent  {

  constructor(private service: PostService) { }

  loginForm = new FormGroup({
    emailLogin : new FormControl('', [
      Validators.required,
      EmailValidators.cannotContainSpaceEmail,
    ]),

    passwordLogin : new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  });
  postLogin(){
    this.service.createPostLogin(this.emailLogin.value, this.passwordLogin.value)
      .subscribe(response => {
        console.log('account logged');
      })
  }

  signupForm = new FormGroup({
    nameSignup : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      EmailValidators.cannotContainSpaceName,
    ]),
    emailSignup : new FormControl('', [
      Validators.required,
      EmailValidators.cannotContainSpaceEmail,
    ]),

    passwordSignup : new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  });
  postSignup(){
    this.service.createPostSignup(this.nameSignup.value, this.emailSignup.value, this.passwordSignup.value)
      .subscribe(response => {
        console.log('account created');
      })
  }

  
  get emailLogin(){
    return this.loginForm.get('emailLogin');
  }

  get passwordLogin() {
    return this.loginForm.get('passwordLogin');
  }



  get nameSignup(){
    return this.signupForm.get('nameSignup')
  }

  get emailSignup(){
    return this.signupForm.get('emailSignup');
  }

  get passwordSignup() {
    return this.signupForm.get('passwordSignup');
  }

  login(){
    this.loginForm.setErrors({
      invalidLogin:true
    })
  }

  signup(){
    this.signupForm.setErrors({
      invalidLogin:true
    })
  }

  show: boolean = true;
  show1 :boolean = true;
}
