import { Component, OnInit } from '@angular/core';
import { User } from "../common/models/user";
import { UserService } from "../common/services/user.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit{
  user: User;
  userService: UserService;

  constructor(userService: UserService){
    this.userService = userService;
  }

  ngOnInit(): void{
    //this.userService.getUser().subscribe(user => this.user = user);
    return;
  }
}
