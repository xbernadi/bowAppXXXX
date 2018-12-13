import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SqlService } from '../../services/sql.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  profile: any;

  constructor(  private auth: AuthService,
                private _sqlService: SqlService ) { }

  ngOnInit() {

    // Mirem si existeix un Perfil d'usuari de Auth0
    // si existeix, carrega les seves dades
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log ( 'Existeix el perfil a la AUTH' );
    } else {
      this.auth.getProfile((err, profile) => {
        console.log ( 'NO existeix el perfil a la AUTH' );
        this.profile = profile;
        // console.log (this.profile);

        // localStorage.setItem('profileId', this.profile['sub']);
        localStorage.setItem('profileNick', this.profile['nickname']);
        localStorage.setItem('profileSub', this.profile['sub']);

        // Consulta si existeix el perfil a la BBDD de Firebase
        this._sqlService.consultaPerfil ( this.profile['nickname'] )
          .subscribe( dataX => {
            console.log ( dataX );
            const keys = Object.keys(dataX);
             if ( keys.length === 0 ) {
              console.log ( ' NO Existeix el perfil a la BBDD' );
              console.log ('Guardar');

              // Sino existeix a Firebase insertar nou perfil
              const today = new Date();
              const dd = today.getDate();
              const mm = today.getMonth() + 1;
              const yyyy = today.getFullYear();
              const avui = dd + '/' + mm + '/' + yyyy;

              const arxJson = {
                'nick' : this.profile['nickname'],
                'data' : avui,
                'sub'  : this.profile['sub']
              };

              this._sqlService.nouUsuari ( arxJson )
                .subscribe ( data => {
                console.log ( data );
                 localStorage.setItem('profileId', data['name']);
              });

             } else {
              console.log ( ' Existeix el perfil a la BBDD' );
              console.log (keys[0]);
              localStorage.setItem('profileId', keys[0]);
             }

        }, error => console.log(error));

      });
    }
  }

}
