import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  postsLogin: any[];
  postsSignup: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  createPostLogin(emailLogin, passwordLogin){
    return this.http.post(this.url, JSON.stringify(this.postsLogin));
  }
  createPostSignup(nameSignup ,emailSignup, passwordSignup){
    return this.http.post(this.url, JSON.stringify(this.postsSignup));
  }
}