import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  list: Bill[] = 
  [
    new Bill(
      {
        szlaszam: 'Lik-001', 
        nAfaKulcs: "AAM",
        darab: 1,
        fizHatDatum: new Date(2020, 5, 30, 15, 16, 17),
        kiallDatum: new Date,
        kibocsajto: 'Lukoil, sdfg dsgfdasg',
        me: 'darab',
        nOsszeg: 5000,
        teljDatum: new Date,
        termek: 'Esz-95',
        vevo: 'Kiss Jakab'
      }
    ),
    new Bill(
      {
        szlaszam: 'Lik-002', 
        vevo: 'Nagy Jakab',
        nAfaKulcs: "TAM",
        darab: 1,
        fizHatDatum: new Date(2020, 5, 24),
        kiallDatum: new Date,
        kibocsajto: 'Lukoil, sdfg dsgfdasg',
        me: 'darab',
        nOsszeg: 20000,
        teljDatum: new Date,
        termek: 'Esz-95',
      }
    ),
    new Bill(
      {
        szlaszam: 'Lik-003', 
        nAfaKulcs: "27",
        darab: 1,
        fizHatDatum: new Date(2020, 5, 23),
        kiallDatum: new Date,
        kibocsajto: 'Lukoil, sdfg dsgfdasg',
        me: 'darab',
        nOsszeg: 100000,
        teljDatum: new Date,
        termek: 'Esz-95',
        vevo: 'Kiss Jenő'
      }
    )
  ];

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

}
