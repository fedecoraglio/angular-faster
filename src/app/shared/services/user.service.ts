import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

const SERVER_REST_API_URL = "http://localhost:3000/users/";

@Injectable()
export class UserService {

  private http: Http;

  constructor(http:Http) {
    this.http = http;
  }

  getUsers() {
    return this.http.get(SERVER_REST_API_URL)
        .map(res => res.json());
  }

}
