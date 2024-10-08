import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistryService } from 'src/app/services/registry.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class RegistryPage {

  name: string = ''
  lastName: string = ''
  tel: string = ''
  bdate: string = ''
  email: string = ''
  pass: string = ''

  constructor(private registry:RegistryService) { }
  
  onRegister(){
    const user = {
      first: this.name,
      last: this.lastName,
      born: this.bdate, // Ou qualquer outro campo que você deseje enviar
      tel: this.tel,
      email: this.email
    };     
    this.registry.addUser(user)
  }
}
