import { Directive,HostListener,ElementRef } from '@angular/core';



@Directive({
  selector: '[appInbuildDirective2]'
})


export class InbuildDirective2Directive {
@HostListener('blur')
onblur(){
  
  this.el.nativeElement.style.backgroundColor='yellow';
  let car=this.el.nativeElement.value;
// var car:string=this.el.nativeElement.value;
// this.el.nativeElement.value=car.toUpperCase();


}
constructor(public el:ElementRef) { } 
}

//let car=this.el.nativeElement.value;
