import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { User } from '../models/user';
import { environment } from '../../../environments/environment'

const SERVER_REST_API_URL = "http://localhost:3000/users/";

@Injectable()
export class UserService {

  private http: Http;
  private serverRestAPIUrl: string;
  test: EventEmitter<any>;

  constructor(http:Http) {
    this.test = new EventEmitter();
    this.http = http;
    this.serverRestAPIUrl = environment.apiEndPoint + "/users";
  }

  getUsers() {
    return this.http.get(this.serverRestAPIUrl)
        .map(res => res.json());
  }

  deleteUser(id) {
    this.test.emit("Este es mi nuevo test");
    return this.http.delete(this.serverRestAPIUrl + "/" + id);
  }

  saveUser(user:User) {
    let body = JSON.stringify({
        "id": user.id,
        "name": user.name,
        "username": user.username
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serverRestAPIUrl, body, options);
  }

}
