import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  isselected=true;
  onclick(){
    this.isselected=!this.isselected;
  }
isclick=true;
  on(){
  this.isclick=!this.isclick;
  }

  constructor() { }

  ngOnInit() {
  }

}
