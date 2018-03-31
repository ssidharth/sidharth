import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  employee = {
    name: "Arun",
    doj:new Date(2017,3,4),
    designation: "Sr.Manager",
    Address:"pune,Maharastra",
    salary:234.4567890
  };
  

  constructor() { }

  ngOnInit() {
  }

}
