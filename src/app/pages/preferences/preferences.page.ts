import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Firestore para gravar as preferências
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Firebase Auth
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

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

  async savePreferences() {
    try {
      const user = await this.afAuth.currentUser; // USUÁRIO ATUAL
      if (user) {
        const uid = user.uid;
        await this.afs.collection('users').doc(uid).set({
          preferences: this.preferences
        }, { merge: true }); // Usamos "merge: true" para atualizar sem sobrescrever tudo
        // console.log('Preferências salvas com sucesso:', this.preferences);
      } else {
        console.error('Usuário não autenticado');
      }
    } catch (error) {
      console.error('Erro ao salvar as preferências:', error); //TRATAR ERRO
    }
  }
}
