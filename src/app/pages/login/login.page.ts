import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule] 
})
export class LoginPage {
  email: string = '';
  pass: string = '';

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {}

  onLogin() {
    if (this.email && this.pass) {
      this.authService.login(this.email, this.pass);
      this.router.navigate(['feed'])
      this.showToast('Login bem sucedido', 'success')
    } else {
      this.showToast('insira as informações de login', 'danger')
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
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
