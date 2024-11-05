import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NewPasswordService } from 'src/app/services/new-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
})
export class ChangePassPage {
  public email: string = '';
  public resetEmailSent: boolean = false;
  public resetEmailError: boolean = false;

  constructor(private router: Router, private toastController: ToastController, private newPass: NewPasswordService) { }

  // Envia o email de recuperação
  async sendResetEmail() {
    try {
      await this.newPass.sendPasswordResetEmail(this.email);
      this.resetEmailSent = true;
      this.resetEmailError = false;
      this.showToast('E-mail de recuperação enviado com sucesso.', 'success');
    } catch (error) {
      this.resetEmailSent = false;
      this.resetEmailError = true;
      this.showToast('Erro ao enviar o e-mail. Por favor, tente novamente.', 'danger');
    }
  }

  // Função para exibir notificações
  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    await toast.present();
  }

  // Navega para a tela de login
  loginPage() {
    this.router.navigate(['/login']);
  }
}
