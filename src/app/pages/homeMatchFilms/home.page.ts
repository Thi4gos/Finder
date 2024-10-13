import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})

 export class HomePage {
  constructor(private navcontroller: NavController) {}
  loginPage(){
    this.navcontroller.navigateForward(['/login'])
  }
  RegistryPage(){
    this.navcontroller.navigateForward(['/registry'])
  }
  PreferencesPage(){
    this.navcontroller.navigateForward(['/preferences'])
  }
  
  ProfilePage(){
    this.navcontroller.navigateForward(['/profile'])
  }
  changePassPage(){
    this.navcontroller.navigateForward(['/change-pass'])
  }
  FeedPage(){
    this.navcontroller.navigateForward(['/feed'])
  }

  
}
