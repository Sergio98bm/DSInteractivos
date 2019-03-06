import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service'
@IonicPage()
@Component({
selector: 'page-nuevo-contacto',
templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {
constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService) {
 }
ionViewDidLoad() {
 console.log('ionViewDidLoad NuevoContactoPage');
 }
onAddContact(value: {nombre:string,organizacion:string,movil:string,correo:string}){
 this.contactService.addContact(value);
 this.navCtrl.pop();
 }
 }
