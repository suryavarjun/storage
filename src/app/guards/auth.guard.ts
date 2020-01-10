import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
//import { AuthenticationService } from '../services/authentication.service';
import { AuthService } from '../services/auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(public auth: AuthService) {}
 
  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}
