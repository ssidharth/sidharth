import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbindingattrib',
  templateUrl: './classbindingattrib.component.html',
  styleUrls: ['./classbindingattrib.component.css']
})
export class ClassbindingattribComponent {

  isSlected = false;
  onClick(){
     this.isSlected = !this.isSlected;
  }

  
  
}
