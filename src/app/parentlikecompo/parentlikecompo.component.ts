import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentlikecompo',
  templateUrl: './parentlikecompo.component.html',
  styleUrls: ['./parentlikecompo.component.css']
})
export class ParentlikecompoComponent implements OnInit {
  isliked=false;
  count=10;

  constructor() { }

  ngOnInit() {
  }

}
