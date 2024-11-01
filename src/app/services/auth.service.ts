import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signInWithPopup, User } from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';  
import { Router } from '@angular/router';
import { ConectDBService } from './conect-db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router, private conectDBService: ConectDBService) { }

  async getCurrentUser(): Promise<User | null> {
    return await this.auth.currentUser;
  }

  // LOGIN COM EMAIL/SENHA
  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/preferences']);
    } catch (error) {
      console.error('Erro no login:', error); // Tratar erro aqui
    }
  }

  // LOGIN COM GOOGLE
  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider(); // Provider Google
      const userCredential = await signInWithPopup(this.auth, provider);
      console.log('Login com Google bem-sucedido:', userCredential.user);
    } catch (error) {
      console.error('Erro no login com Google:', error); // Tratar erro aqui
    }
  }
}
