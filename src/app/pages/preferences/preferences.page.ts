import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PreferencesPage {
  // Modelo de preferências do usuário
  preferences = {
    actionMovies: false,
    comedyMovies: false,
    dramaMovies: false,
    horrorMovies: false,
    sciFiMovies: false,
    actionSeries: false,
    comedySeries: false,
    dramaSeries: false,
    horrorSeries: false,
    sciFiSeries: false,
    newReleases: true,
    recommendations: true,
    language: 'portuguese'
  };

  constructor() { }

  // Função para salvar preferências
  savePreferences() {
    console.log('Preferências salvas:', this.preferences);
  }

}
