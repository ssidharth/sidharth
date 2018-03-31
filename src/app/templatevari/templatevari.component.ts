import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevari',
  templateUrl: './templatevari.component.html',
  styleUrls: ['./templatevari.component.css']
})
export class TemplatevariComponent implements OnInit {

  keyUp(sfdsfs){
  console.log(sfdsfs.value);

  }

  constructor() { }

  ngOnInit() {
  }

}
