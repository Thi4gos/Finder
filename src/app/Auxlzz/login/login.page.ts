import { Component } from '@angular/core';

@Component({
  selector: 'app-login', // Seletor do componente de login
  templateUrl: './login.page.html', // Template HTML do componente
  styleUrls: ['./login.page.scss'], // Estilos SCSS do componente
})
export class LoginPage {

  constructor() { } // Construtor do componente

  // Adicionando a função login
  login() {
    // Aqui você pode implementar a lógica de login, por exemplo, chamar um serviço de autenticação
    console.log('Tentativa de login'); // Log temporário para teste
  }

  // Função para realizar o login com Google
  loginWithGoogle() {
    // Aqui você pode implementar a lógica para login com Google
    console.log('Tentativa de login com Google'); // Log temporário para teste
  }
}
