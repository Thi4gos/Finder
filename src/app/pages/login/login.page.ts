import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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

  loginWithFacebook() {
    this.authService.loginWithFacebook();
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
