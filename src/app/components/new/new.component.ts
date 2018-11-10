import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CampsService } from '../../services/camps.services';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {

  tirada: Object = {
    camp: '',
    arc: ''
  };

  camps: any;
  idTirada: number;

  constructor(  private _campsService: CampsService,
                private router: Router,
                private route: ActivatedRoute ) { }

  ngOnInit() {
    this._campsService.getCamps()
    .subscribe( data => {
      this.camps = data;
    });
  }

  guardar (forma: NgForm) {
    console.log (forma);
    console.log (this.tirada);
    // Grabar a la BBDD les dades de la tirada i agafem l'ID
    this.idTirada = 1;

    // Redirigir a la següent pagina
    this.router.navigate(['/formTirada', this.idTirada]);
  }
}
