import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]  // Aqui importamos o módulo do Ionic
})
export class LoginPage {

  constructor(private cdr: ChangeDetectorRef) {}

  onLogin() {
    console.log('Tentativa de login');
  }

  loginWithGoogle() {
    // Lógica de autenticação com o Google aqui
    console.log('Login com Google');
  }
  ionViewDidEnter() {
    // Forçar a detecção de mudanças
    this.cdr.detectChanges();
  }
}
