export class Bill {
    szlaszam: string;
    kibocsajto: string;
    vevo: string;
    termek: string;
    darab: number;
    me: string;
    nOsszeg: number;
    nAfaKulcs: 'AAM' | 'TAM' | 'AJT' | '5' | '18' | '27';
    teljDatum: Date;
    kiallDatum: Date;
    fizHatDatum: Date;   
    brutto?: number;    

    constructor(settings: Bill){
        for (const k in settings){
            if (settings[k]){
                this[k] = settings[k];
            }
        }
    }
}
