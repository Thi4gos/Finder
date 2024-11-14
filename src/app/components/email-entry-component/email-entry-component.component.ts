import { Component, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-email-entry',
  templateUrl: './email-entry-component.component.html',
  styleUrls: ['./email-entry-component.component.scss'],
})
export class EmailEntryComponent {
  public email: string = '';

  @Output() sendEmail = new EventEmitter<string>();

  // Emite o evento para o componente pai com o e-mail
  onSendEmail() {
    this.sendEmail.emit(this.email);
  }
}
