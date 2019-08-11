import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
h1Style: boolean = false;
  constructor() { 
    console.log("automatically clicked");
  }

  ngOnInit() {
  }
firstClick(){
  console.log("first click");
  this.h1Style=true;
}
}
