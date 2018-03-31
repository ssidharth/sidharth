import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentoutput',
  templateUrl: './parentoutput.component.html',
  styleUrls: ['./parentoutput.component.css']
})
export class ParentoutputComponent implements OnInit {
  isliked=false;
  count=10;
  onClickEvent($event){
    alert("event is fired"+$event);
  }

  constructor() { }

  ngOnInit() {
  }

}
