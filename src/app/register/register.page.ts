import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from '../services/authentication.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router)  { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if (user){
      console.log('Succesfully Created User');
      this.router.navigateByUrl('/')
    }
  }

}
