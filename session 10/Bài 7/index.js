"use strict";
class Circle {
    constructor(radius) {
        this.radius1 = radius;
    }
    area() {
        return Math.PI * this.radius1 ** 2;
    }
    perimeter() {
        return 2 * Math.PI * this.radius1;
    }
    getRadius() {
        return this.radius1;
    }
    setRadius(radius1) {
        this.radius1 = radius1;
    }
}
const circle1 = new Circle(5);
console.log(`Bán kính của hình tròn là: ${circle1.getRadius()}`);
console.log(`Chu vi của hình tròn là: ${circle1.perimeter()}`);
console.log(`Diện tích của hình tròn là: ${circle1.area()}`);
circle1.setRadius(7);
console.log(`Bán kính của hình tròn là: ${circle1.getRadius()}`);
console.log(`Chu vi của hình tròn là: ${circle1.perimeter()}`);
console.log(`Diện tích của hình tròn là: ${circle1.area()}`);
