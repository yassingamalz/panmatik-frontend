import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonPretty'
})
export class JsonPrettyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
