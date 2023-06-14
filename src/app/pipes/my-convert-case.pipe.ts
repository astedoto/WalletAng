import { Pipe, PipeTransform } from '@angular/core';
import { myEnum } from 'src/shared/myEnum';

@Pipe({
  name: 'myConvertCase'
})


export class MyConvertCasePipe implements PipeTransform {

  transform(value: string, ...args: myEnum[]): unknown {
    const [p] = args
    
    if (p === myEnum.Upper) { return value.toUpperCase() }
    else if (p === myEnum.Lower) { return value.toLowerCase() }
    else if (p === myEnum.Title) { return value.toLowerCase() + " T" }
    return value+' incorrect ';
  }

}
