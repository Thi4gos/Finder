import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkAuthentication();
    });
  }

  async checkAuthentication() {
    const user = await this.authService.getCurrentUser();

    if (user) {
      console.log('Usuário autenticado');
      this.router.navigate(['/home']);
    } else {
      console.log('Usuário não autenticado');
      this.router.navigate(['/login']);
    }
  }

  feedPage() {
    this.router.navigate(['feed']);
  }
}
