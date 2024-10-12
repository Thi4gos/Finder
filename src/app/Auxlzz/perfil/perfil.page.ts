import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  // Objeto que contém as informações do usuário
  user = {
    firstName: 'Seu Nome', // Nome do usuário
    lastName: 'Seu Sobrenome', // Sobrenome do usuário
    birthDate: '01/01/2000', // Exemplo de data de nascimento
    profilePicture: '', // URL da imagem de perfil (pode ser uma string vazia inicialmente)
    reviews: [ // Avaliações feitas pelo usuário
      { movieTitle: 'Filme 1', rating: 5, comment: 'Excelente!' },
      { movieTitle: 'Filme 2', rating: 4, comment: 'Muito bom!' },
      // Adicione mais avaliações conforme necessário
    ]
  };

  constructor() { }

  ngOnInit() {
    // Aqui você pode fazer uma chamada ao serviço para obter as informações do usuário
  }

  // Método para alterar a senha do usuário
  changePassword() {
    console.log('Alterar senha'); // Lógica para alterar a senha (pode abrir um modal ou navegar para uma página de alteração de senha)
  }

  // Método para lidar com o upload da foto de perfil
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;

    // Verifica se target e files não são nulos
    if (target.files && target.files.length > 0) {
      const file = target.files[0]; // Obtém o arquivo selecionado
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.profilePicture = e.target.result; // Atualiza a URL da imagem com a imagem carregada
      };
      reader.readAsDataURL(file); // Converte a imagem para URL base64
    }
  }

  // Método para remover a foto de perfil
  removeProfilePicture() {
    this.user.profilePicture = ''; // Remove a foto de perfil, definindo como string vazia
  }
}
