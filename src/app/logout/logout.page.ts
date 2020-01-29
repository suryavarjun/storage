import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CrudService } from './../service/crud.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  users=[];
  numbers=[];
  persons='';
  enterName='';
  Phonenumber='';
  email='';
  favorites: any;
  ApiService: any;
  
  constructor(private http: HttpClient, private apiservice: ApiService) { } 

  ngOnInit() {
    this.ApiService.readPerson().subscribe(data => {
 
   this.persons = data.map(e => {
     return {
     id: e.payload.doc.id,
     isEdit: false,
     enterName: e.payload.doc.data()['Name'],
     Phonenumber: e.payload.doc.data()['Phonenumber'],
     Email: e.payload.doc.data()['email'],
     };
     })
      console.log(this.persons);
     });
  }
  CreatePerson() {
    let record = {};
    record['Name'] = this.enterName;
    record['Phonenumber'] = this.Phonenumber;
    record['Email'] = this.email;
    this.ApiService.createNewPerson(record).then(resp => {
      this.enterName = "";
      this.Phonenumber = '';
      this.email = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  Removeperson(rowID) {
    this.ApiService.delete_Person(rowID);
  }

  EditPerson(record){
    record.isEdit=true;
   record.EditenterName=record.enterName;
   record.EditPhonenumber=record.Phonenumber;
   record.EditEmail=record.Email;
  }

  UpdatePerson(recordUpd){
   let record=[];
   record['Name']=recordUpd.EditenterName;
   record['Phonenumber']=recordUpd.EditPhonenumber;
   record['Email']=recordUpd.EditEmail;
   this.apiservice.UpdatePerson(recordUpd, record);
   recordUpd.isEdit=false;
  }

  //
  add(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response)=>{
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
   
  reg(){
    console.log('Name:' + this.enterName);
    console.log('Number:' + this.Phonenumber);
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

