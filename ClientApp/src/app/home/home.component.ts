import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit{
  constructor(){
    //this.userService = userService;
  }

  ngOnInit(): void{
    //this.userService.getUser().subscribe(user => this.user = user);
    return;
  }
}
