import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]  // Aqui importamos o módulo do Ionic
})
export class LoginPage {
  email: string = '';
  pass: string = '';

  constructor(private authService: AuthService, private navcontroller: NavController) {}

  // Método de login com email e senha
  onLogin() {
    if (this.email && this.pass) {
      this.authService.login(this.email, this.pass);
    } else {
      console.error('Email e senha são necessários');
    }
  }

  // Método de login com Google
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
