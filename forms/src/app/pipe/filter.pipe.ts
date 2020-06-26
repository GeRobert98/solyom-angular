import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key?: string): unknown {
    if (!Array.isArray(value) || (!phrase)){
      return value;
    }
    
    phrase= phrase.toLowerCase();

    return value.filter( item => {
      if (key) {
        return (''+ item[key]).toLowerCase().includes( phrase );

      }
      return JSON.stringify(item)
        .replace(/\{+\"[^\"]*\"\:\"+|\"+\}+/g, '')
        .toLowerCase()
        .includes( phrase );
    });
  }
}
