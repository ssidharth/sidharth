var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.display = function () {
        console.log("value of x" + this.x + "value of y" + this.y);
    };
    Object.defineProperty(Point.prototype, "a", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "b", {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var Pointobj = new Point();
Pointobj.a = 1;
Pointobj.b = 2;
console.log(Pointobj.a + "----" + Pointobj.b);
