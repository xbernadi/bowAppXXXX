import { Component, OnInit } from '@angular/core';
import { SqlService } from '../../services/sql.service';
import { Tirada } from '../../interfaces/tirada.interface';

@Component({
  selector: 'app-fi-tirada',
  templateUrl: './fi-tirada.component.html',
  styles: []
})
export class FiTiradaComponent implements OnInit {

  punts = localStorage.getItem('puntsTotals');
  totalDianes = localStorage.getItem('totalDianes');
  plensTotals = localStorage.getItem('plensTotals');
  mitjanaPunts = parseFloat(this.punts) / parseFloat(this.totalDianes);

  text = "Hola";

  ngOnInit(): void {
  }

  constructor( private _sqlService: SqlService) {

    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const hh = today.getHours();
    const min = today.getMinutes();
    const avui = dd + '/' + mm + '/' + yyyy;
    const hora = hh + ':' + min;

    const arxJson = {
      'data' : avui,
      'hora' : hora,
      'usuari' : localStorage.getItem('profileId'),
      'camp' : localStorage.getItem('camp'),
      'punts' : this.punts,
      'plens' : localStorage.getItem('plensTotals'),
      puntuacions: []
    };

    // Puntuacions

    for (let i = 1; i <= 24; i++) {
      const nomVarF1 = 'diana' + i + '_F1';
      const nomVarF2 = 'diana' + i + '_F2';

      arxJson.puntuacions.push({
        'diana' : i,
        'fletxa_1' : localStorage.getItem(nomVarF1),
        'fletxa_2' : localStorage.getItem(nomVarF2)
      });
    }
     

    // Grabar a la BBDD
    this._sqlService.novaTiradaSQL ( arxJson )
      .subscribe ( data => {
        // console.log ( data["status"] );
        if ( data["status"] == 1) this.text = "Dades guardades correctament al teu historial";
        else this.text = "NO hem pogit guardar les dades correctament al historial";
    });
  }
}
