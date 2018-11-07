import { Component, OnInit } from '@angular/core';
import { CampsService } from '../../services/camps.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styles: []
})
export class CampsComponent implements OnInit {

  camps: any[] = [];


  constructor(  private _campsService: CampsService,
                private router: Router ) { }

  ngOnInit() {
    // this.camps = this._campsService.getCamps();

    this._campsService.getCamps()
      .subscribe( data => {
        console.log(data);
        this.camps = data;
      });
  }

  veureCamp ( idx: number ) {
    this.router.navigate( ['/camp', idx] );
  }
}
