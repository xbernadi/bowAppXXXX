import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CampsService } from '../../services/camps.services';

@Component({
  selector: 'app-form-tirada',
  templateUrl: './form-tirada.component.html'
})
export class FormTiradaComponent implements OnInit {
  
  diana = {
    fletxa1: 0,
    fletxa2: 0
  };

  puntsTotals = 0;
  tirPerfecte = "";

  constructor(  private _campsService: CampsService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  guardar (forma: NgForm) {
    //console.log (this.diana.fletxa1);
    this.puntsTotals = Number(this.diana.fletxa1) + Number(this.diana.fletxa2);

    // Miro si ha fet un PLE, tir perfecte
    if (Number(this.diana.fletxa1) >= 10 && Number(this.diana.fletxa2)>= 10 ) {
      this.tirPerfecte = "Tir perfecte, felicitats";
    } else {
      this.tirPerfecte = "";
    }

   
  }

}
