import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistryService } from 'src/app/services/registry.service';
import { Router } from '@angular/router';

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

  constructor(private registry:RegistryService, private router: Router) { }
  
  onRegister(){
    const user = {
      first: this.name,
      last: this.lastName,
      born: this.bdate, 
      tel: this.tel,
      email: this.email,
      pass: this.pass
    };     
    this.registry.addUser(user)
    var sucess: Promise<boolean> | void | Boolean = this.registry.defResult()
    sucess = true ? this.router.navigate(['/preferences']) : console.log('Deu erro')
  }
}
