class Point{
    private   x:number;
     private  y:number;
   constructor(x?:number,y?:number){
       this.x = x;
       this.y = y;
   
   }
   display()
   {
       console.log("value of x"+this.x+"value of y"+this.y);
   }
   set a(x:number){
       this.x=x;
   }
   set b(y:number){
       this.y=y;
   }
   get a(){
       return this.x;
   }
   get b(){
       return this.y;
   }
   
   }
   
   let Pointobj=new Point();
    Pointobj.a =1;
    Pointobj.b =2;
   
    console.log(Pointobj.a+"----"+Pointobj.b);
   
   
   