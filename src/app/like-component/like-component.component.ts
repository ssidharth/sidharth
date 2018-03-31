import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-compoment',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent implements OnInit {

  @Input() isLiked=true;
  @Input() count =0;
  onClick(){
         this.isLiked=!this.isLiked;
           this.count +=this.isLiked ?+1:-1;
  }

  constructor() { }

  ngOnInit() {
  }

}
