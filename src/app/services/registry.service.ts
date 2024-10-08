import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ConectDBService } from './conect-db.service';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private firestore: Firestore, private conectdbservice: ConectDBService) {}

  async addUser(user: { first: string, last: string, born: string, tel: string, email: string }) {
    try {
      const docRef = await addDoc(collection(this.firestore, "users"), user);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
