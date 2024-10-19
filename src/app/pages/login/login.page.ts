import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.email && this.pass) {
      this.authService.login(this.email, this.pass);
    } else {
      console.error('Email e senha são necessários'); //TRATAR ERRO
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
