import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildstructuraldirec',
  templateUrl: './inbuildstructuraldirec.component.html',
  styleUrls: ['./inbuildstructuraldirec.component.css']
})
export class InbuildstructuraldirecComponent implements OnInit {

  courses=[];

isCourseAvailable(){
  if (this.courses.length  > 0) {

    return true;
  } else {
    return false;
  }
}

  constructor() { 


  }

  ngOnInit() {
  }

}
