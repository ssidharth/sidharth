import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipePipe implements PipeTransform {

  transform(value: string, limit?: number){
   if (!value)
        return null;
     return value.substr(0,2)+"..." ; 
  }

}
