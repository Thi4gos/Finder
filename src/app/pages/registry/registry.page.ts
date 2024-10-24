import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RegistryService } from 'src/app/services/registry.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage {

  name: string = '';
  lastName: string = '';
  tel: string = '';
  bdate: string = '';
  email: string = '';
  pass: string = '';

  constructor(private registry: RegistryService, private router: Router, private toastController: ToastController, private authService: AuthService) {}

  async onRegister() {
    const user = {
      first: this.name,
      last: this.lastName,
      born: this.bdate,
      tel: this.tel,
      email: this.email,
      pass: this.pass
    };

    // Aguarde o resultado da operação de registro
    const success = await this.registry.addUser(user);

    if (success) {
      await this.authService.login(user.email, user.pass);
      this.showToast('Usuário registrado com sucesso!', 'success');
      this.router.navigate(['/preferences']);
    } else {
      this.showToast('Erro ao registrar usuário!', 'danger');
    }
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    await toast.present();
  }
}