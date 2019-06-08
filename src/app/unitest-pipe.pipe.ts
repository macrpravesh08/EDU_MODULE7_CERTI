import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitestPipe'
})

export class UnitestPipePipe implements PipeTransform {

  transform(value: string): string {
    if(value == ''){
      return "Left side argument is mandatory";
    }
    return value + " - UNIT TEST PIPE.";
  }

}
