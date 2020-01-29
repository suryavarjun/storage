import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserValue: any;
  isAuthenticated(): boolean {
    throw new Error("Method not implemented.");
  }
  // isAuthenticated(): boolean {
  //   throw new Error("Method not implemented.");
  //}
  public isLogged : any= false;

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    afAuth.authState.subscribe(user => (this.isLogged=user));
   }

   //create
   createNewPerson(record){
     return this.firestore.collection('mail').add(record);
   }
   //read
   readPerson(){
    return this.firestore.collection('mail').snapshotChanges();
  }
  //update
  updateStudent(recordId,record){
   this.firestore.doc('mail/'+ recordId).update(record);
  }
  //delete
  deleteStudent(recordID){
    this.firestore.doc('mail/'+ recordID).delete();
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
