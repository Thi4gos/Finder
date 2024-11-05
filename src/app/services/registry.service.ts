import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { getAuth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  constructor(private firestore: Firestore) {}

  async addUser(user: User): Promise<boolean> {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, user.email, user.pass);

      await addDoc(collection(this.firestore, "Usuarios"), user); // SALVA O OBJETO COMPLETO
      return true;
    } catch (e) {
      return false;
    }
  }
}
