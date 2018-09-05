import { Component } from '@angular/core';
import { createClient, GoogleMapsClient } from '@google/maps';
import { NgForm, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { EmailValidators } from '../application/validators'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  title: string = 'My first AGM project';
  lat: number = 35.678418;
  lng: number = 50;

  constructor(private http: HttpClient){ }

  helpForm = new FormGroup({
    name : new FormControl('', [
      Validators.required,
    ]),

    email : new FormControl('', [
      Validators.required,
      EmailValidators.cannotContainSpaceEmail
    ]),

    comment : new FormControl('', [
      Validators.required,
    ])
  });

  get name(){
    return this.helpForm.get('name');
  }

  get email() {
    return this.helpForm.get('email');
  }

  get comment() {
    return this.helpForm.get('comment');
  }

  private url = 'http://jsonplaceholder.typicode.com/posts';

  post(){
      this.http.post(this.url, JSON.stringify(this.name.value))
        .subscribe(response => {
          console.log('name sended')
        })
      this.http.post(this.url, JSON.stringify(this.email.value))
      .subscribe(response => {
        console.log('email sended')
      })
      this.http.post(this.url, JSON.stringify(this.comment.value))
      .subscribe(response => {
        console.log('comment sended')
      })
  }
}
