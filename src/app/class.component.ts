import { ClassService } from './service/class.service';
import {Component} from '@angular/core'
@Component({
    selector:'list-name',
    templateUrl:'./class.component.html',

})
export class ClassComponent{
    title:"this class detail";
    arrayNames;
    constructor(private classServ: ClassService){
        this.arrayNames=classServ.classfunc();
    }
}
