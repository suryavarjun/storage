import { Injectable } from '@angular/core';
 
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 createProduct(record){
  return this.firestore.collection('Items').add(record);
 }

 readProduct(){
   return this.firestore.collection('Items').snapshotChanges();
 }

 update_Product(recordID,record){
   return this.firestore.doc('Items/' + recordID).update(record);
 }

// update_Student(recordID,record){
//   this.firestore.doc('Students/' + recordID).update(record);
// }

 deleteProduct(record_id){
   return this.firestore.doc('Items/' + record_id).delete();
 }
}