import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updatePerson(recordUpd: any, record: any[]) {
    throw new Error("Method not implemented.");
  }
  UpdateProduct(recordUpd: any, record: any[]) {
    throw new Error("Method not implemented.");
  }
  // updatePerson({ recordUpd, record }: { recordUpd: any; record: any[]; }) {
  //   throw new Error("Method not implemented.");
  // }
  
  constructor(private http:HttpClient) { }
}
