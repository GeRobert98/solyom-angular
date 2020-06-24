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
    id?: number;

    constructor(settings: Bill){
        if (!settings) {
            return;
        }
        
        for (const k in settings){
            if (settings[k]){
                this[k] = settings[k];
            }
        }
    }
}
