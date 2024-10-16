import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage {
  constructor(private navcontroller: NavController) { }
  back(){ 
    this.navcontroller.navigateForward(['feed'])
  }
  user = { //ADICIONAR ESTRUTURA DE USUÁRIO EXTRA AO BANCO(AVALIAÇÕES, FOTO DE PERFIL)
    profileImage: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    // reviews: [
    //   movieTitle = '',
    //   rating = '',
    //   comment = ''
    // ]
  }
  removeProfilePicture(){}
  changePassword(){}
  onFileSelected(){}
}
