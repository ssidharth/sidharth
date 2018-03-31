import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularbinding',
  templateUrl: './angularbinding.component.html',
  styleUrls: ['./angularbinding.component.css']
})
export class AngularbindingComponent implements OnInit {
  email="singhsidharth.03@gmail.com";
  onclick(){
  console.log(this.email);

  }
  constructor() { }

  ngOnInit() {
  }

}
