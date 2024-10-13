import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChangePassPage {
  back(){ 
    this.navcontroller.navigateBack(['home'])
  }
  constructor(private navcontroller: NavController) { }
  sendResetEmail(){

  }
}
