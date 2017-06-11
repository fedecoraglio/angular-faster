import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() userCreatedEvent = new EventEmitter();
  newUser: User;

  constructor() { }

  onSubmit() {
    this.userCreatedEvent.emit({user: this.newUser});
    this.newUser = new User("","","");
  }

  ngOnInit() {
    this.newUser = new User("","","");
  }

}
