import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-prac2',
  templateUrl: './prac2.component.html',
  styleUrls: ['./prac2.component.css']
})
export class Prac2Component implements OnInit {

  //email="singhsidharth.03@gmail.com";
  // funct($event){

    // console.log($event.target.value);

    //funct(){
     // console.log(this.email);
// }
//isSelected=false;
   // onclick(){
      //this.isSelected=!this.isSelected; 
  //  }
    //isclick=true;

  //on(){
 
   // this.isclick=!this.isclick;
//}

isSelected=true;
on(){
  this.isSelected=!this.isSelected;
}

  constructor() { }

  ngOnInit() {
  }

}
