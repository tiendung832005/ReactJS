"use strict";
class Shape2 {
    constructor(name) {
        this.name = name;
    }
    //  viết theo phương thức normal
    getName() {
        return `hinhf là ${this.name}`;
    }
}
class Rectangle extends Shape2 {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chieeuf dài ${this.width}`);
        console.log(`Chieeuf rộng ${this.height}`);
    }
}
let rectangle1 = new Rectangle("hình tròn", 5, 6);
console.log("tên", rectangle1.getName());
