import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
})
export class ChangePassPage {
  back(){ 
    this.router.navigate(['home'])
  }
  constructor(private router: Router, private toastcontroller: ToastController) { }
  sendResetEmail(){
    
  }
  loginPage() {
    this.router.navigate(['/login']);
  }

  registryPage() {
    this.router.navigate(['/registry']);
  }

  preferencesPage() {
    this.router.navigate(['/preferences']);
  }

  profilePage() {
    this.router.navigate(['/profile']);
  }

  changePassPage() {
    this.router.navigate(['/change-pass']);
  }

  feedPage() {
    this.router.navigate(['/feed']);
  }
}
