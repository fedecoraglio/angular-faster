import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  message:string;
  users: Array<User>;
  activeUser;
  userService:UserService;

  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit() {
    this.users = [];
    this.userService.getUsers()
        .subscribe((resp) => {
          for(let u of resp) {
            this.users.push(new User(u.id, u.name, u.username));
          }
      });
  }

  selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }

}
