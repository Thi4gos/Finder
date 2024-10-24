import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; // Importando o módulo Ionic tradicional
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service'; // Serviço de autenticação

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),  // Configurando o módulo Ionic
    AppRoutingModule,  // Módulo de rotas
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService // Serviço de autenticação
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
