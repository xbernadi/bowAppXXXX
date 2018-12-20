import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Tirada } from '../interfaces/tirada.interface';


@Injectable({
  providedIn: 'root'
})
export class SqlService {

  URL = 'https://bow3d-110901.firebaseio.com/tirada.json';
  URL2 = 'http://elmultiusos.net/json/save_tirada.php';
  xURL: string;

  constructor(private http: HttpClient) { }

  // Tirada
  novaTirada ( tirada ) {
    const body = JSON.stringify(tirada);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.URL, body, { headers } ).pipe(
      map( res => {
        return res;
       })
    );
  }

  novaTiradaSQL ( tirada ) {
    const body = JSON.stringify(tirada);
    console.log (tirada);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    const id = 2;
    this.xURL = `${this.URL2}?id=${id}&json=${body}`;
    console.log (this.xURL );
    return this.http.post(this.xURL, body, { headers } ).pipe(
      map( res => {
        console.log (res);
        return res;

       })
    );
  }

    consultaTiradesUsuari ( nick ) {
    const xUrl = 'https://bow3d-110901.firebaseio.com/tirada.json?orderBy="usuari"&equalTo="' + nick + '"';
    return this.http.get ( xUrl ).pipe(
      map( res => {
        return res;
       })
    );
  }

  // Perfil usuari
  consultaPerfil ( nick ) {
    const xUrl = 'https://bow3d-110901.firebaseio.com/usuaris.json?orderBy="nick"&equalTo="' + nick + '"';
    return this.http.get ( xUrl ).pipe(
      map( res => {
        return res;
       })
    );
  }

  nouUsuari ( usuari ) {
    const xUrl = 'https://bow3d-110901.firebaseio.com/usuaris.json';
    const body = JSON.stringify(usuari);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( xUrl, body, { headers } ).pipe(
      map( res => {
        return res;
       })
    );
  }

}
