import { Component, OnInit } from '@angular/core';
import { SqlService } from '../../services/sql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html'
})
export class HistorialComponent implements OnInit {

  tirada: any;

  constructor(  private _sqlService: SqlService,
                private router: Router ) { }

  ngOnInit() {
    this._sqlService.consultaTiradesUsuari( localStorage.getItem('profileId') )
      .subscribe( data => {
        this.tirada = data;
        console.log (data);

      }, error => console.log(error));
    }

}
