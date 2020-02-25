import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Button } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit() {
  }
  // logout() {
  //   this.authService.logout();
  // }

  // buton(){
  //   // this.router.navigateByUrl('login')
  //   this.router.navigateByUrl('login');
  // }

  prodts(){
    console.log('clicked prodc');
    this.router.navigateByUrl('logout');
  }
  details(){
    console.log('clicked');
    this.router.navigateByUrl('profile');
  }
  logss(){
    // console.log('home');
    this.router.navigateByUrl('home');
  }
call(){
  console.log('Phone Number');
}
mesge(){
  console.log('Enter Mesge');
  this.router.navigateByUrl('message');
}
}


