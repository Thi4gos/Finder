import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from '../../models/interfaces'; // IMPORTA A INTERFACE
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: User = {
    // EXEMPLO DE DADOS PARA TESTE
    firstName: 'Thiago',
    lastName: 'Silva',
    email: 'thiago@exemplo.com',
    pass: '',
    tel: 123456789,
    birthDate: '2000-01-01',
    profileImage: null,
    favoriteGenres: ['action', 'comedy'],
    totalReviews: 35,
    averageRating: 4.5,
    creationDate: '2022-05-12',
    twoFactorEnabled: false,
    preferences: {
      actionMovies: true,
      comedyMovies: false,
      dramaMovies: true,
      horrorMovies: false,
      sciFiMovies: true,
      actionSeries: true,
      comedySeries: false,
      dramaSeries: true,
      horrorSeries: false,
      sciFiSeries: true,
      newReleases: true,
      recommendations: true,
      language: 'portuguese',
    },
  };

  isEditing = false;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private toastController: ToastController
  ) {}

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  // SALVAR PERFIL
  saveProfile() {
    this.profileService.saveUserProfile(this.user).then(() => {
      this.showToast('Perfil atualizado com sucesso!', 'success');
      this.isEditing = false;
    }).catch((error) => {
      console.error('Erro ao salvar perfil:', error);
      this.showToast('Erro ao atualizar o perfil. Tente novamente!', 'danger');
    });
  }

  cancelEdit(){

  }

  removeProfilePicture(){

  }

  onFileSelected(){
    
  }

  // NOTIFICAÇÃO
  async showToast(message: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'bottom',
    });
    toast.present();
  }
}
