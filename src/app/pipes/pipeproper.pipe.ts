import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeproper'
})
export class PipeproperPipe implements PipeTransform {

  transform(value:string, args?:number){
    if (!value)
    return null;
 return value.substr(0,4)+"..." ; 
}

  

}
