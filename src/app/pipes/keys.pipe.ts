import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  
  // Serveix per passar d'un objecte a un array
  
  transform(value: any): any {
    const keys = [];
    for( let key in value ) {
      keys.push(key);
    }
    return keys;
  }

}
