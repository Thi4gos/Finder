import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage {
  constructor(
    private router: Router, 
    private profileService: ProfileService,
    private toastController: ToastController
  ) { }

  user = {
    firstName: 'Thiago',
    lastName: 'Silva',
    birthDate: '2000-01-01',
    profileImage: null,
    favoriteGenres: ['action', 'comedy'],
    totalReviews: 35,
    averageRating: 4.5,
    creationDate: '2022-05-12'
  };

  isEditing = false;

  // Alternar estado de edição
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  // Função para salvar alterações do perfil
  saveProfile() {
    this.profileService.saveUserProfile(this.user).then(() => {
      this.showToast('Perfil atualizado com sucesso!', 'success');
      this.isEditing = false;
    }).catch((error) => {
      console.error('Erro ao salvar perfil:', error);
      this.showToast('Erro ao atualizar o perfil. Tente novamente!', 'danger');
    });
  }

  // Função para cancelar edição
  cancelEdit() {
    this.isEditing = false;
  }

  // Função para remover a foto de perfil
  removeProfilePicture() {
    this.user.profileImage = null;
    this.showToast('Foto de perfil removida com sucesso!', 'success');
  }

  // Função chamada ao selecionar uma nova foto
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.profileService.uploadProfilePicture(file).then(() => {
      this.showToast('Nova foto de perfil atualizada!', 'success');
    }).catch((error) => {
      console.error('Erro ao enviar a foto:', error);
      this.showToast('Erro ao enviar a foto. Tente novamente!', 'danger');
    });
  }

  // Função para exibir notificações
  async showToast(message: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }

  // Função para voltar ao feed
  back() { 
    this.router.navigate(['feed']);
  }
}
