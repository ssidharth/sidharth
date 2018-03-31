import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecasePipe'
})
export class TitlecasePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
    
  }

}
