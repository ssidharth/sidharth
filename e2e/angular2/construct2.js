var Car = /** @class */ (function () {
    function Car(x, y) {
        this.x = x;
        this.y = y;
    }
    Car.prototype.Display = function () {
        console.log("value of x" + this.x + "value of y" + this.y);
    };
    Car.prototype.setx = function (x) {
        this.x = x;
    };
    Car.prototype.sety = function (y) {
        this.y = y;
    };
    Car.prototype.getx = function () {
        return this.x;
    };
    Car.prototype.gety = function () {
        return this.y;
    };
    return Car;
}());
var GGobj = new Car(1, 2);
GGobj.Display();
GGobj.setx(3);
GGobj.sety(6);
console.log(GGobj.getx() + "VALUE" + GGobj.gety());
