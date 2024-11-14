import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NewPasswordService } from 'src/app/services/new-password.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
})
export class ChangePassPage {
  public email: string = '';
  public resetEmailSent: boolean = false;

  constructor(private toastController: ToastController, private newPass: NewPasswordService) {}

  // Função chamada no primeiro componente (EmailEntryComponent) para enviar o e-mail
  async sendResetEmail() {
    try {
      await this.newPass.sendPasswordResetEmail(this.email);
      this.resetEmailSent = true;  // Altera o estado para exibir o componente de confirmação
      this.showToast('E-mail de recuperação enviado com sucesso.', 'success');
    } catch (error) {
      this.resetEmailSent = false;
      this.showToast('Erro ao enviar o e-mail. Por favor, tente novamente.', 'danger');
    }
  }

  // Função para exibir uma notificação
  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    await toast.present();
  }
}
