import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { getAuth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../models/user';
import { registryUser } from '../models/registryuser';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  constructor(private firestore: Firestore) {}

  /**
   * REGISTRA UM NOVO USUÁRIO
   * @param user Objeto com os dados do usuário
   * @returns Promise<void>
   * @throws Error com mensagem descritiva caso ocorra algum problema
   */
  async registerUser(user: registryUser): Promise<void> {
    try {
      // AUTENTICAÇÃO DO USUÁRIO NO FIREBASE AUTH
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, user.email, user.pass);

      await addDoc(collection(this.firestore, "Usuarios"), user);
    } catch (error: any) {
      // RECONHECE E RETORNA ERROS DETALHADOS
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('O e-mail fornecido já está em uso.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('O e-mail fornecido é inválido.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('A senha deve ter pelo menos 6 caracteres.');
      } else {
        throw new Error('Erro ao registrar usuário. Tente novamente mais tarde.');
      }
    }
  }
}
