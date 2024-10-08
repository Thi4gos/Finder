import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { ConectDBService } from 'src/app/services/conect-db.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class RegistryPage {

  constructor(private navCtrl: NavController, private cdr: ChangeDetectorRef, private conectdbservice:ConectDBService) { }
  
  backPage() {
    history.back()
  }

  onRegister(){
    console.log("Vish");
  }
  backToLogin(){
    this.navCtrl.back();
  }
  ionViewDidEnter() {
    // Forçar a detecção de mudanças
    this.cdr.detectChanges();
  };
}
