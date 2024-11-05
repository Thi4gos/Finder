import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { User } from '../../models/interfaces'; // IMPORTA A INTERFACE

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage {
  // PREFERÊNCIAS DO USUÁRIO
  preferences: User['preferences'] = {
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
    language: 'portuguese',
  };

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private toastcontroller: ToastController
  ) {}

  // SALVAR PREFERÊNCIAS
  async savePreferences() {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        const uid = user.uid;
        await this.afs.collection('users').doc(uid).set({
          preferences: this.preferences,
        }, { merge: true });
        this.showToast('Preferências salvas com sucesso!', 'success');
      } else {
        console.error('Usuário não autenticado');
      }
    } catch (error) {
      console.error('Erro ao salvar as preferências:', error);
    }
  }

  // NOTIFICAÇÃO
  async showToast(message: string, color: string) {
    const toast = await this.toastcontroller.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }
}
