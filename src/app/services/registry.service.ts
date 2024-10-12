import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ConectDBService } from './conect-db.service';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  sucess: boolean = true;
  constructor(private firestore: Firestore, private conectdbservice: ConectDBService) {}

  async addUser(user: { first: string, last: string, born: string, tel: string, email: string, pass: string }) {
    try {
      const docRef = await addDoc(collection(this.firestore, "Usuarios"), user);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      this.sucess = false;
    }
  }
  async defResult(){
    await this.addUser;
    return this.sucess;
  }
}
