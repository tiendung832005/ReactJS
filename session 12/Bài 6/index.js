"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        console.log(`Name: ${this.name}, Price: ${this.price}, Brand: ${this.brand}`);
    }
}
const electronics = new Electronics("iphone15", 20000000, "apple");
electronics.getDescription();
