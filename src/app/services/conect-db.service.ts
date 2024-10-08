import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore'; // Injetar Firestore diretamente

@Injectable({
  providedIn: 'root'
})
export class ConectDBService {
  
  constructor(private firestore: Firestore) { 
    // Agora você pode usar `this.firestore` para realizar operações
  }
}
