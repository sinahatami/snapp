import { Component } from '@angular/core';
import { trigger, transition, style, animate, } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css'],
  animations : [
    trigger('wellcome', [
      transition(':enter', [
        animate('1s cubic-bezier(.21,.56,.29,.15)',style({transform:'translate(600px)', opacity: 0}))  
      ])
    ])
  ]   
})
export class DownloadComponent {

  private url='https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }


  sendSms(phoneNum: HTMLInputElement){
    this.http.post(this.url, JSON.stringify(phoneNum))
      .subscribe(response => {
        console.log("sended");
      })
  }

}
