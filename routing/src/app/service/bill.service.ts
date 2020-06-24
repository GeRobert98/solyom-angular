import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  //list: Bill[];
  
  apiUrl = 'http://localhost:3000/bill/';

  constructor(
    private http: HttpClient,
    
  ) {}

  get(id?: string|number): Observable<any> {
    return this.http.get(`${this.apiUrl}${ id ? id : ''}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }

  update(bill: Bill): Observable<any> {
    return this.http.put(`${this.apiUrl}${bill.id}`, bill);
  }

  create(bill: Bill): Observable<any> {
    return this.http.post(`${this.apiUrl}`, bill);
  }
}
