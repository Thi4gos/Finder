import { Component } from '@angular/core';

@Component({
  selector: 'app-signup', // Seletor do componente de cadastro
  templateUrl: './signup.page.html', // Template HTML do componente
  styleUrls: ['./signup.page.scss'], // Estilos SCSS do componente
})
export class SignupPage {

  constructor() { } // Construtor do componente

  // Método para formatar a data de nascimento conforme o usuário digita
  formatDate(event: any) {
    let input = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (input.length <= 2) {
      event.target.value = input; // Preenche apenas o dia
    } else if (input.length <= 4) {
      event.target.value = `${input.slice(0, 2)}/${input.slice(2, 4)}`; // Preenche dia e mês
    } else {
      event.target.value = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4, 8)}`; // Preenche dia, mês e ano
    }
  }
}
