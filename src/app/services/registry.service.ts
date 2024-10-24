import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { getAuth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  constructor(private firestore: Firestore) {}

  async addUser(user: { first: string, last: string, born: string, tel: string, email: string, pass: string }): Promise<boolean> {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, user.email, user.pass);

      const docRef = await addDoc(collection(this.firestore, "Usuarios"), user);
      return true;
    } catch (e) {
      return false;
    }
  }
}
