import { Component } from '@angular/core';

@Component({
  selector: 'app-esqueceu-senha', // Seletor para o componente da página
  templateUrl: './esqueceu-senha.page.html', // Caminho do template HTML
  styleUrls: ['./esqueceu-senha.page.scss'], // Caminho do arquivo de estilo SCSS
})
export class EsqueceuSenhaPage {
  constructor() { }

  // Método chamado ao clicar no botão "Enviar"
  sendResetEmail() {
    console.log('Email de recuperação enviado'); // Log para depuração
    // Aqui você pode adicionar a lógica para enviar o email de recuperação
  }
}
