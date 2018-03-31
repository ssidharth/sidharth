import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appInbuildDrective]'
})
export class InbuildDrectiveDirective {
  constructor( public el:ElementRef) { }
  @HostListener('blur') onblur(){
    let value:string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
  

}


// attribite directive