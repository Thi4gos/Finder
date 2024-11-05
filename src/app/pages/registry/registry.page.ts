import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RegistryService } from 'src/app/services/registry.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/interfaces'; // IMPORTA A INTERFACE

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage {
  // DADOS DO USUÁRIO
  user: Partial<User> = {
    firstName: '',
    lastName: '',
    tel: 0,
    birthDate: '',
    email: '',
    pass: '',
    // OUTROS CAMPOS DEFAULT
    creationDate: new Date().toISOString(),
    twoFactorEnabled: false,
  };

  constructor(
    private registry: RegistryService,
    private router: Router,
    private toastController: ToastController,
    private authService: AuthService
  ) {}

  // REGISTRO DO USUÁRIO
  async onRegister() {
    const success = await this.registry.addUser(this.user as User); // CAST PARA USER

    if (success) {
      await this.authService.login(this.user.email!, this.user.pass!);
      this.showToast('Usuário registrado com sucesso!', 'success');
      this.router.navigate(['/preferences']);
    } else {
      this.showToast('Erro ao registrar usuário!', 'danger');
    }
  }

  // NOTIFICAÇÃO
  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }
}
