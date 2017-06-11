import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  message:string;
  users: Array<User>;
  activeUser;

  constructor() { }

  ngOnInit() {
    this.message = "Bienvenidos";
    this.users = [
      new User(25, "Leo", "Leonel"),
      new User(26, "Diego", "Diegote"),
      new User(27, "Martin", "tincho")
    ];
  }

  selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }

}
