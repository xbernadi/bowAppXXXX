import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class CampsService {

    CampsURL = 'https://elmultiusos.net/json/demo_camps.php';

    constructor( private http: HttpClient ) { }

    getCampsZS () {
      return this.http.get ( this.CampsURL ).pipe(
        map( res => {
          return res;
        })
       );
    }

    getCamps ( id?: number) {

      if ( id > 0 ) {
        let xurl = `${this.CampsURL}?id=${id}`;
      } else {
        let xurl = this.CampsURL;
      }

      return this.http.get ( xurl ).pipe(
        map( res => {
          return res;
        })
       );
    }
}
