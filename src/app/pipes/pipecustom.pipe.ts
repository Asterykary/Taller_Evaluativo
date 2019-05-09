import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecustom'
})
export class PipecustomPipe implements PipeTransform {

  
  transform(value: Date): any {
  
    return value.toString();
  }


}
