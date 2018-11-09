import { Component, OnInit } from '@angular/core';
import { CampsService } from '../../services/camps.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styles: []
})
export class CampsComponent implements OnInit {

  camps: any;

  constructor(  private _campsService: CampsService,
                private router: Router ) { }

  ngOnInit() {

    this._campsService.getCamps()
      .subscribe( data => {
        this.camps = data;
      }, error => console.log(error));
  }

  veureCamp ( idx: number ) {
    this.router.navigate( ['/camp', idx] );
  }
}
