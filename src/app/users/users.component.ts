import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  message:string;
  users: Array<any>;

  constructor() { }

  ngOnInit() {
    this.message = "Bienvenidos";
    this.users = [
      {id: "25", name: "Leo", username:"Leonel"},
      {id: "26", name: "Diego", username:"Diegote"},
      {id: "27", name: "Martin", username:"tincho"}
    ]
  }

}
