import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Tirada } from '../interfaces/tirada.interface';


@Injectable({
  providedIn: 'root'
})
export class SqlService {

  constructor(private http: HttpClient) { }

  // Tirada
  novaTiradaSQL ( tirada ) {
    const body = JSON.stringify(tirada);
    console.log (tirada);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    const xURL = `https://elmultiusos.net/json/save_tirada.php?json=${body}`;
    return this.http.post(xURL, body, { headers } ).pipe(
      map( res => {
        console.log (res);
        return res;

       })
    );
  }

    consultaTiradesUsuari ( nick ) {
      console.log ( nick );
    const xUrl = 'https://elmultiusos.net/json/list_tirada.php?idUser="' + nick + '"';
    return this.http.get ( xUrl ).pipe(
      map( res => {
        return res;
       })
    );
  }

  // Perfil usuari
  consultaPerfil ( nick, sub ) {
    const xUrl = 'https://elmultiusos.net/json/usuaris.php?BuscarNick=1&UserNick=' + nick + '&auth=' + sub;
    console.log (xUrl);
    return this.http.get ( xUrl ).pipe(
      map( res => {
        return res;
       })
    );
  }

  nouUsuari ( usuari ) {
    const body = JSON.stringify(usuari);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const xUrl = `https://elmultiusos.net/json/usuaris.php?crear=1&json=${body}`;
    return this.http.post( xUrl, body, { headers } ).pipe(
      map( res => {
        return res;
       })
    );
  }

}
