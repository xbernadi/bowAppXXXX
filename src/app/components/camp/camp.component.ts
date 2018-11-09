import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampsService } from '../../services/camps.services';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styles: []
})
export class CampComponent implements OnInit {

  camps: any;
  temperatura: any = 0;
  id: number;

  constructor(  private activatedRoute: ActivatedRoute,
                private _campsService: CampsService,
                private http: HttpClient ) {

    this.activatedRoute.params
        .subscribe ( parametros => {
                    this.id = parametros['id'];
    });

    this.http.get('http://api.openweathermap.org/data/2.5/weather?id=3111294&appid=5fd61e008a4523083c299f995652aa12&units=metric')
        .subscribe ( temp => {
          console.log(temp);
          // this.temperatura = temp.main.temp;
          this.temperatura = temp;
        });

   }

   ngOnInit() {

    this._campsService.getCamps(this.id)
      .subscribe( data => {
        this.camps = data;
      }, error => console.log(error));
  }
}
