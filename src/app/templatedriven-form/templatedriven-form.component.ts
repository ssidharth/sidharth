import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven-form',
  templateUrl: './templatedriven-form.component.html',
  styleUrls: ['./templatedriven-form.component.css']
})
export class TemplatedrivenFormComponent {

  // log(firstName){
  //   console.log(firstName);
  // }
log(firstname){
  console.log(firstname);
}
log1(firstname){
  console.log(firstname);
}
 login(f){
console.log(f);
 }

}
