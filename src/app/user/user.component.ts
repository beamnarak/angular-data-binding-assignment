import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = '';
  allowReset = false;

  constructor() { }

  ngOnInit() {
  }

  checkInput() {
    this.allowReset = (this.username != '') ? true : false;
  }

  resetUsername() {
    this.username = '';
    this.allowReset = false;
  }
}
