import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { CrudService } from './../service/crud.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage{
  // users=[];
  // numbers=[];
  // persons='';
  // quantitynumber='';
  product='';
  quantity='';
  cost='';
  favorites: any;
  ApiService: any;
  productForm:FormGroup;
  
  constructor(private http: HttpClient, private apiservice: ApiService,
    private formBuilder: FormBuilder, private router: Router, private route:ActivatedRoute) {
      this.productForm = this.formBuilder.group({
        product: ['', Validators.compose([Validators.required])],
        quantity: [Validators.required],
        cost: [Validators.required]
      });
     } 

  submit(){
  if(this.product == '' || this.quantity=='' || this.cost==''){
    alert('Enter all details');
  } else {
    console.log('Product Name:' + this.product);
    console.log('Product Quantity:' + this.quantity);
    console.log('Product Cost:' + this.cost);
  }
  }
 
  onSubmit(){
    this.product='';
    this.quantity='';
    this.cost='';
  }


  // out(){
  //   this.router.navigateByUrl('home');
  // }
  
  // createPerson() {
  //   let record = {};
  //   record['Product Name'] = this.productName;
  //   record['Quantity number'] = this.quantitynumber;
  //   record['Cost'] = this.cost;
  //   this.ApiService.createPerson(record).then(resp => {
  //     this.productName = "";
  //     this.quantitynumber = '';
  //     this.cost = "";
  //     console.log(resp);
  //   })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // Removeproduct(rowID) {
  //   this.ApiService.delete_Person(rowID);
  // }

  // Editproduct(record){
  //   record.isEdit=true;
  //  record.EditenterName=record.productName;
  //  record.EditPhonenumber=record.quantity;
  //  record.EditEmail=record.cost;
  // }

  // UpdateProduct(recordUpd){
  //  let record=[];
  //  record['Product Name']=recordUpd.productName;
  //  record['Quantity number']=recordUpd.quantity;
  //  record['Cost']=recordUpd.cost;
  //  this.apiservice.UpdateProduct
  //  (recordUpd, record);
  //  recordUpd.isEdit=false;
  // }

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
   
//   reg(){
//     console.log('Name:' + this.product);
//     console.log('Number:' + this.quantitynumber);
// }
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

