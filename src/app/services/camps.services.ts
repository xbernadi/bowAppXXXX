import { Injectable } from '@angular/core';

@Injectable()
export class CampsService {

    private camps: any[] = [
    {
      nom: 'Club Arquers de Rubi',
      localitat: 'Rubi, BCN',
      url: 'www.rubi.com',
      img: 'assets/img/aquaman.png'
    },
    {
        nom: 'Vall Llobera Terra d\'Arquers',
        localitat: 'Vic, BCN',
        url: 'www.valllobera.com',
        img: 'assets/img/aquaman.png'
    }];

    constructor() {
        console.log( 'Servei llest' );
    }

    getCamps() {
       return this.camps;
    }

    getCamp (idx: string) {
        return this.camps[idx];
    } 
}
