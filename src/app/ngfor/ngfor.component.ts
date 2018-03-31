import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  courses;


  car(){
  this.courses=[{name:"Sidharth",
    pay:"6",
    duration:"30 days"},

    {
      name:"java",
      pay:"7",
      duration:"3 days"

    },
{
  name:"Sh",
    pay:"5",
    duration:"20 days"
}]
  }
  trackCourse(car){
    return car ? car.name : undefined;
  }


  constructor() { }

  ngOnInit() {
  }

}
