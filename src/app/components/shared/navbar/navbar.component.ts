import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  profile: any;

  constructor( private auth:AuthService ) { 
    auth.handleAuthentication();

  }

  //Auth0
  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
