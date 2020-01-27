import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  users=[];
  numbers=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  add(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response)=>{
      console.log(response);
    },
    (err)=>{
      console.log('err');
    },
    ()=>{
      console.log('Completed');
    });

    this.http.post('https://eudemo.soccerlab.com:443/APIRest/v0.2/auth',{
      "username": "pandutestapp",
      "password": "pandu123"
    }).subscribe((response)=>{
      console.log(response);
    })
    console.log('Success');
  }

}
  // add(uname){
  //   this.users.push({
  //     name:uname.value, 
  //     // phonenumber:this.numbers
  //   }); 
  // }
  // // add(){
  // //   console.log(this.users);
  // // }

  // sub(){
  //   this.users.splice(this.users.length -1)
  // }
  // remove(item){
  //   this.users.splice(item, 1)
  // }

