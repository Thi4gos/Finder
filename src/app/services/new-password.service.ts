import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class NewPasswordService {

  constructor(private afAuth: AngularFireAuth) { }

  // Método para enviar o email de redefinição de senha
  async sendPasswordResetEmail(email: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      console.log("E-mail de recuperação enviado.");
    } catch (error) {
      console.error("Erro ao enviar e-mail de recuperação:", error);
      throw error; // Lançar o erro para tratamento no componente
    }
  }

  // Método para atualizar a senha
  async changePassword(newPassword: string): Promise<void> {
    const user = await this.afAuth.currentUser;

    if (user) {
      try {
        await user.updatePassword(newPassword);
        console.log("Senha atualizada com sucesso.");
      } catch (error) {
        console.error("Erro ao atualizar senha:", error);
        throw error;
      }
    } else {
      console.error("Nenhum usuário autenticado.");
    }
  }
}
