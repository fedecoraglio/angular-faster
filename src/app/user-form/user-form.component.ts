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
  messageErrorForm: string;

  constructor(userService: UserService) {
    this.userService = userService;
    this.userService.test.subscribe((res) => {
      console.log("dentro de form " + res);
    })
  }

  onSubmit() {
    this.userService.getUsers().subscribe(
      (resp) => {
        let usernameIsAvailable = true;
        for(let u of resp) {
          if(u.username === this.newUser.username) {
            usernameIsAvailable = false;
            break;
          }
        }
        if(usernameIsAvailable) {
          this.userService.saveUser(this.newUser)
              .subscribe(()=>{
                this.userCreatedEvent.emit({user: this.newUser, error:null});
                this.active = false;
                this.newUser = new User("","","");
                setTimeout(() => {  this.active = true; }, 0);          
            });
        } else {
          this.messageErrorForm = "El usuario ya existe dentro de app-form"
          //this.userCreatedEvent.emit({user:null, error:"El usuario ya existe"});
        }
      }
    )
  }



  ngOnInit() {
    this.newUser = new User("","","");
  }

}
