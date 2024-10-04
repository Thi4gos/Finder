import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
// import { ModalController } from '@ionic/angular';
// import { TutorialService } from './tutorial.service';
// import { TutorialModalComponent } from './tutorial-modal/tutorial-modal.component';

// export class MainPage {
//   constructor(
//     private tutorialService: TutorialService,
//     private modalCtrl: ModalController
//   ) {}

//   async ionViewDidEnter() {
//     const hasSeenTutorial = await this.tutorialService.hasSeenTutorial();

//     if (!hasSeenTutorial) {
//       this.presentTutorialModal();
//     }
//   }

//   async presentTutorialModal() {
//     const modal = await this.modalCtrl.create({
//       component: TutorialModalComponent
//     });
//     await modal.present();

//     modal.onDidDismiss().then(() => {
//       // Marcar que o tutorial foi visto
//       this.tutorialService.setSeenTutorial();
//     });
//   }
// }
