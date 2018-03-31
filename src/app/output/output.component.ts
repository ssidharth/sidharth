import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() isLiked=true;
  @Input() count =0;
  @Output() sidharth = new EventEmitter();
  onClick(){
         this.isLiked=!this.isLiked;
           this.count +=this.isLiked ?+1:-1;
           //this.clickEvent.emit();
           this.sidharth.emit(this.isLiked);
  }

  constructor() { }

  ngOnInit() {
  }

}
