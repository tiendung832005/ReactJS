"use strict";
class Circle2 {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let circle = new Circle2(10);
console.log("Diện tích:", circle.calculateArea());
console.log("Chu vi hình tròn:", circle.calculatePerimeter());
let rectangle = new Rectangle2(6, 8);
console.log("diện tích hcn:", rectangle.calculateArea());
console.log("chu vi hcn:", rectangle.calculatePerimeter());
