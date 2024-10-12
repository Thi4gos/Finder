import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  // Método de login com email e senha
  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Usuário logado:', userCredential.user);
      this.router.navigate(['/preferences'])
      // Aqui você pode fazer algo após o login bem-sucedido, como navegar para outra página
    } catch (error) {
      console.error('Erro no login:', error);
    }
  }

  // Método de login com Google
  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      console.log('Login com Google bem-sucedido:', userCredential.user);
      
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  }
}
