import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'news'
})
export class NewsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
