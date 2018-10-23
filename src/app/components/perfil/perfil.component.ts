import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  profile: any;

  constructor( private auth:AuthService) { }

  ngOnInit() {

    //Mirem si existeix un Perfil d'usuari de Auth0
    // si existeix, carrega les seves dades
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
    
    console.log (this.profile);
  }

}
