class Car{
     x:number;
    y:number;



constructor(x:number,y:number){
    this.x=x;
    this.y=y;

}

Display(){
    console.log("value of x"+this.x+"value of y"+this.y);
}
setx(x:number){
this.x=x;
}
sety(y:number){
    this.y=y;
}
getx(){
    return this.x;

}
gety(){
    return this.y;
}

}

let GGobj=new Car(1,2);

GGobj.Display();
GGobj.setx(3);
GGobj.sety(6);
console.log(GGobj.getx()+"VALUE"+GGobj.gety());


