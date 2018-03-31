import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
// import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
//   car= new FormGroup({

// userName:new FormControl('',[Validators.required,
//   Validators.minLength(3),Validators.pattern('sidharth') ]),

//   password:new FormControl('',[Validators.required])

//   })

//   get usern(){
//     return this.car.get('userName');
//   }

  constructor() { }

  ngOnInit() {
  }

}
