import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  users=[];
  numbers=[];
  constructor() { }

  ngOnInit() {
  }

  add(uname){
    this.users.push({
      name:uname.value, 
      // phonenumber:this.numbers
    }); 
  }
  // add(){
  //   console.log(this.users);
  // }

  sub(){
    this.users.splice(this.users.length -1)
  }
  remove(item){
    this.users.splice(item, 1)
  }
}
