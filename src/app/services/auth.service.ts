import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'                             // ADICIONAR INTERFACES
  
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFirestore) {}

  // RETORNA USUÁRIO ATUAL SE LOGADO
  async getCurrentUser(): Promise<firebase.default.User | null> {
    return this.afAuth.currentUser; // Retorna o usuário logado ou null
  }

  // LOGIN COM EMAIL/SENHA
  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/preferences']);
    } catch (error) {
      console.error('Erro no login:', error); // Tratar erro aqui
    }
  }

  // ENVIA E-MAIL DE VERIFICAÇÃO PARA 2FA APÓS O LOGIN
  async sendVerificationEmail(): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user && !user.emailVerified) {
      await user.sendEmailVerification(); // Envia email de verificação
    } else {
      console.log('Usuário não autenticado ou e-mail já verificado.');
    }
  }

  // VERIFICA SE O EMAIL DO USUÁRIO FOI VERIFICADO
  async isEmailVerified(): Promise<boolean> {
    const user = await this.afAuth.currentUser;
    return user ? user.emailVerified : false; // Retorna true se verificado, senão false
  }

  // ATIVA/DESATIVA 2FA PARA O USUÁRIO
  async toggleTwoFactorAuth(enable: boolean): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      await this.db.collection('Usuarios').doc(user.uid).set({ twoFactorEnabled: enable }, { merge: true });
    }
  }

  // CHECA SE 2FA ESTÁ HABILITADO PARA O USUÁRIO
  async isTwoFactorEnabled(): Promise<boolean> {
    const user = await this.afAuth.currentUser;
    if (!user) return false;
    
    // Obtém documento do Firestore como Observable e converte para Promise
    const doc = await firstValueFrom(this.db.collection<User>('Usuarios').doc(user.uid).get());
    return doc?.data()?.twoFactorEnabled || false;
  }

  // LOGIN COM 2FA: VERIFICA EMAIL APÓS O LOGIN SE 2FA ESTIVER ATIVADO
  async loginWithTwoFactor(email: string, password: string): Promise<void> {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    if (user && (await this.isTwoFactorEnabled())) {
      await this.sendVerificationEmail();
      console.log('E-mail com código 2FA enviado.');
    } else {
      console.log('Login bem-sucedido sem 2FA.');
    }
  }

  // FUNÇÃO DE RECUPERAÇÃO DE SENHA: ENVIA E-MAIL PARA REDIFINIÇÃO DE SENHA
  async resetPassword(email: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      console.log('E-mail para redefinição de senha enviado.');
    } catch (error) {
      console.error('Erro ao enviar e-mail de redefinição de senha:', error); // Tratar erro aqui
    }
  }

  // AUTENTICAÇÕES COM PROVIDERS EXTERNOS
  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider(); 
      const userCredential = await this.afAuth.signInWithPopup(provider);
      console.log('Login com Google bem-sucedido:', userCredential.user);
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  }

  async loginWithFacebook(): Promise<void> {
    try {
      const provider = new FacebookAuthProvider(); 
      const userCredential = await this.afAuth.signInWithPopup(provider);
      console.log('Login com Facebook bem-sucedido:', userCredential.user);
    } catch (error) {
      console.error('Erro no login com Facebook:', error);
    }  
  }
}
