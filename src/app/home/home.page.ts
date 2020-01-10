import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
// import { AuthenticationService, OnInit} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }
 
  log() {
    this.router.navigate(['login'])
  }

}
