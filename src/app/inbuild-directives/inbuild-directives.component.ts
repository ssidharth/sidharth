import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-directives',
  templateUrl: './inbuild-directives.component.html',
  styleUrls: ['./inbuild-directives.component.css']
})
export class InbuildDirectivesComponent implements OnInit {

  courses =[
    { id:1,name:'Java1'},
    { id:2,name:'Java2'},
    { id:3,name:'Java3'},
    { id:4,name:'Java4'}
  ];
  removedCourse(course){
    let index = this.courses.indexOf(course);
    console.log(course);
    // this.courses.push({
    //   id:index+1, name:'new item'
    // })
    this.courses.splice(index,1);
    }
  employee = {
    name:'Arun',
    address:{}
  };
 
  trackCourse(course){
    return course ? course.id : undefined;
  }
  constructor() { }

  ngOnInit() {
  }

}
