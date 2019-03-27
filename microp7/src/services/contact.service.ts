

import { Contact } from "../models/contact.model";
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";



@Injectable()
export class ContactService{

   // private contacts: Contact []=
    //[{"nombre":"Andres","organizacion":"UC3M","movil":"666666666",correo:"andres@example.com"}];

    private contactRef = this.db.list<Contact>('AgendaFirebase');
    constructor(private db: AngularFireDatabase){
    }

    
    
    addContact(value: Contact){

     return   this.contactRef.push(value);

    }

    getContacts(){

        return this.contactRef;
    }

    updateContact(value: Contact){
        
        return this.contactRef.update(value.key,value);

    }

    removeContact(value: Contact){

        return this.contactRef.remove(value.key);

    }
}