import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMask'
})
export class MyMaskPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+"f"
  }

}
