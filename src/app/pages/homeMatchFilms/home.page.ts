import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})

 export class HomePage {
  constructor(private router: Router) {}

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