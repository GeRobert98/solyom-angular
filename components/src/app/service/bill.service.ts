import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';

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
        fizHatDatum: new Date(2020, 6, 25),
        kiallDatum: new Date,
        kibocsajto: 'Lukoil, sdfg dsgfdasg',
        me: 'darab',
        nOsszeg: 20000,
        teljDatum: new Date,
        termek: 'Esz-95',
        vevo: 'Kiss Jakab'
      }
    ),
    new Bill(
      {
        szlaszam: 'Lik-002', 
        nAfaKulcs: "TAM",
        darab: 1,
        fizHatDatum: new Date(2020, 6, 25),
        kiallDatum: new Date,
        kibocsajto: 'Lukoil, sdfg dsgfdasg',
        me: 'darab',
        nOsszeg: 20000,
        teljDatum: new Date,
        termek: 'Esz-95',
        vevo: 'Kiss Jakab'
      }
    ),
    new Bill(
      {
        szlaszam: 'Lik-003', 
        nAfaKulcs: "27",
        darab: 1,
        fizHatDatum: new Date(2020, 6, 25),
        kiallDatum: new Date,
        kibocsajto: 'Lukoil, sdfg dsgfdasg',
        me: 'darab',
        nOsszeg: 20000,
        teljDatum: new Date,
        termek: 'Esz-95',
        vevo: 'Kiss Jakab'
      }
    )
  ];
  constructor() { }
}
