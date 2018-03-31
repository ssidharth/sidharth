import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickdemo2',
  templateUrl: './clickdemo2.component.html',
  styleUrls: ['./clickdemo2.component.css']
})
export class Clickdemo2Component implements OnInit {
email="singhsidharth.03@gmail.com";
onclick(){
  console.log("email detail" + this.email);
  // console.log("email detail" + $event.target.value);
}

  constructor() { }

  ngOnInit() {
  }

}
