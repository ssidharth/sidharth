export class Toy{
   

constructor(private likeacount:number,private Select:boolean){

}


function(){
if(this.Select)
{
    this.likeacount=this.likeacount++
    this.Select=false;
}

else{
    this.likeacount=this.likeacount--
this.Select=true;

}
}


getSelection(){
    return this.Select;
}

}