import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
 
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
 
  constructor(public auth: AuthService, private router: Router, private authService: AuthService) {} //rout, auth
 
  // canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   const currentUser = this.authService.currentUserValue;
  //   if(currentUser){
  //     return true;
  //   }
  canActivate(): boolean {
    const currentUser = this.authService.currentUserValue;
    if(currentUser){
      return true;
    }

    this.router.navigate(['/login']); //this
    return this.auth.isAuthenticated();
  }
}
