import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickdemo',
  templateUrl: './clickdemo.component.html',
  styleUrls: ['./clickdemo.component.css']
})
export class ClickdemoComponent implements OnInit {
  email="arun";
  onclick(){
        console.log("clicked"+this.email);
  }

  constructor() { }

  ngOnInit() {
  }

}
