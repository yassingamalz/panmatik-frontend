import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'executionTime'
})
export class ExecutionTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
