import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-binding',
  templateUrl: './ng-class-binding.component.html',
  styleUrls: ['./ng-class-binding.component.css']
})
export class NgClassBindingComponent implements OnInit {

  isSlected = false;
  onClick(){
     this.isSlected = !this.isSlected;
  }
  constructor() { }

  ngOnInit() {
  }

}
