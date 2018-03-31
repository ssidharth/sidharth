import { Component, OnInit,Input } from '@angular/core';
//import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-like2',
  templateUrl: './like2.component.html',
  styleUrls: ['./like2.component.css']
})
export class Like2Component implements OnInit {
  @Input('liked') isLiked=true;
  @Input() count =0;
  onClick(){
       this.isLiked=!this.isLiked;
           this.count +=this.isLiked ?+1:-1;
           
  }

  constructor() { }

  ngOnInit() {
  }

}
