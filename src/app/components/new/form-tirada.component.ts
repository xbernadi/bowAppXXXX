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

  
  tirPerfecte = "";
  mitjanaPunts = "";
  dianaActual = Number(localStorage.getItem('dianaActual'));
  punts = Number(localStorage.getItem('puntsTotals'));
  plens = Number(localStorage.getItem('plensTotals'));

  idTirada = localStorage.getItem('idCampanya');
  totalDianes = localStorage.getItem('totalDianes');
  

  constructor(  private _campsService: CampsService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  guardar (forma: NgForm) {
    this.punts = Number(localStorage.getItem('puntsTotals')) + Number(this.diana.fletxa1) + Number(this.diana.fletxa2);

    // Revisar si ha fet un PLE, tir perfecte
    if (Number(this.diana.fletxa1) >= 10 && Number(this.diana.fletxa2)>= 10 ) {
      this.tirPerfecte = "Tir perfecte, felicitats";
      this.plens = Number(localStorage.getItem('plensTotals')) + 1; 
      localStorage.setItem ("plensTotals", this.plens.toString());
    } else {
      this.tirPerfecte = "";
    }

    // Mitjana de punts
    this.mitjanaPunts = ((this.punts) / Number (localStorage.getItem('dianaActual'))).toFixed(1);
    

    // SET de variables globales 
  
    // Puntuacions de les fletxes de cada diana
    let var1 = "diana" + localStorage.getItem('dianaActual') + '_F1';
    localStorage.setItem (var1, this.diana.fletxa1.toString());
    let var2 = "diana" + localStorage.getItem('dianaActual') + '_F2';
    localStorage.setItem (var2, this.diana.fletxa2.toString());
    
    this.dianaActual = Number(localStorage.getItem('dianaActual')) + 1; 
    localStorage.setItem ("dianaActual", this.dianaActual.toString());
    localStorage.setItem ("puntsTotals", this.punts.toString());
   
    //Revisar si s'ha arribat al final del circuit
    if (Number(localStorage.getItem('dianaActual')) > 24 ) {
      console.log ("Fi del recorregut");
      this.router.navigate(['/fiTirada']);
    }
  }

}
