export class Users {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    company: number;
    address: string;
    phone: number;

    constructor(settings: Users){
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
