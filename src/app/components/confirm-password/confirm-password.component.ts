import { Component } from '@angular/core';
import { NewPasswordService } from 'src/app/services/new-password.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss'],
})
export class ConfirmPasswordComponent {
  public newPassword: string = '';
  public confirmPassword: string = '';

  constructor(private newPass: NewPasswordService) {}

  // Função para alterar a senha
  async onChangePassword() {
    if (this.newPassword === this.confirmPassword) {
      try {
        await this.newPass.changePassword(this.newPassword);
        console.log("Senha alterada com sucesso");
      } catch (error) {
        console.error("Erro ao alterar a senha:", error);
      }
    } else {
      console.error("As senhas não coincidem.");
    }
  }
}
