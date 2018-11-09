import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class CampsService {

    CampsURL = 'https://elmultiusos.net/json/demo_camps.php';
    xURL: string;

    constructor( private http: HttpClient ) { }

    getCampsZS () {
      return this.http.get ( this.CampsURL ).pipe(
        map( res => {
          return res;
        })
       );
    }

    getCamps ( id?: number) {
      this.xURL = this.CampsURL;

      if ( id > 0 ) {
        this.xURL = `${this.CampsURL}?id=${id}`;
      } else {
        this.xURL = this.CampsURL;
      }
      return this.http.get ( this.xURL ).pipe(
        map( res => {
          return res;
        })
       );
    }
}
