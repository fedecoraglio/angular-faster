import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() userCreatedEvent = new EventEmitter();
  newUser: User;
  userService:UserService;
  active:boolean= true;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  onSubmit() {
    this.userService.saveUser(this.newUser)
        .subscribe(()=>{
          this.userCreatedEvent.emit({user: this.newUser});
          this.active = false;
          this.newUser = new User("","","");
          setTimeout(() => {  this.active = true; }, 0);          
      });        
  }

  ngOnInit() {
    this.newUser = new User("","","");
  }

}
