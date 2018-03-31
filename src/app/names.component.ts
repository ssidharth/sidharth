import { NameService } from './service/name.service';
import { Component } from '@angular/core';
@Component({

    selector:'name-list',
    templateUrl:'./name.component.html',

})

export class NamesArrayComponent{
    title:"name and details";
    employeeNames;

constructor(private nameServ : NameService){
    this.employeeNames=nameServ.namefunc();
}
       
    
}