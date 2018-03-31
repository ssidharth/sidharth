import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-prac-child',
  templateUrl: './prac-child.component.html',
  styleUrls: ['./prac-child.component.css']
})
export class PracChildComponent implements OnInit {
  @Input() isSelected=true;
  @Input() Count=10;
  up(){
    this.isSelected=!this.isSelected;
    this.Count +=this.isSelected ?+1:-1;
  }
  down(){
    this.isSelected=!this.isSelected;
    this.Count +=this.isSelected ?+1:-1;
  }

  constructor() { }

  ngOnInit() {
  }

}
