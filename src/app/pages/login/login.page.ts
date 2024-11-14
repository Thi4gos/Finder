import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage //implements OnInit 
{
  email: string = '';
  pass: string = '';

  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private router: Router, private toastController: ToastController) {}

  // ngOnInit() {
  //   // MONITORA O ESTADO DE AUTENTICAÇÃO DO USUÁRIO
  //   this.afAuth.onAuthStateChanged((user) => {
  //     if (user) {
  //       // SE O USUÁRIO ESTIVER AUTENTICADO, REDIRECIONA PARA A FEED
  //       this.router.navigate(['/feed']);
  //     }
  //   });
  // }

  toResgistry() {
    this.router.navigate(['registry'])
  }

  onLogin() {
    if (this.email && this.pass) {
      this.authService.login(this.email, this.pass);
      this.router.navigate(['feed'])
      this.showToast('Login bem sucedido', 'success')
    } else {
      this.showToast('insira as informações de login', 'danger')
    }
  }

  async loginWithGoogle() {
    // CHAMA A FUNÇÃO DE LOGIN E CAPTURA O RESULTADO
    const res = await this.authService.loginWithGoogle();

    // BASEADO NO RESULTADO, EXIBE O TOAST
    if (res) {
      this.showToast("Login realizado com sucesso", "success");
      this.router.navigate(['feed'])
    } else {
      this.showToast("Algo deu errado", "danger");
    }
  }

  async loginWithFacebook() {
   const res = await this.authService.loginWithFacebook();

    if (res) {
      this.showToast("Login realizado com sucesso", "success");
      this.router.navigate(['feed'])
    } else {
      this.showToast("Algo deu errado", "danger");
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
