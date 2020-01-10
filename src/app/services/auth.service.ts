import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    throw new Error("Method not implemented.");
  }
  // isAuthenticated(): boolean {
  //   throw new Error("Method not implemented.");
  //}
  public isLogged : any= false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged=user));
   }

//login
async onLogin(user:User){
  try{
    return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  } catch (error) {
    console.log('Error on Login', error);
  }
}

//register
async onRegister(user:User){
  try{
    return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  } catch (error) {
    console.log('Error on Register', error);
  }
}
}
