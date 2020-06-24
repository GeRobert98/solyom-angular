import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brutto'
})
export class BruttoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (!value || !value.toFixed) {
      return value;
    }

    return Math.round(value * 1.27);
  }

}
