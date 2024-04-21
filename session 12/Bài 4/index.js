"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Tên xe: ${this.name},id: ${this.id},Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    slowDown(amount) {
        super.slowDown(amount);
        console.log(`Tên xe: ${this.name},id: ${this.id},Tốc độ giảm đi hiện tại: ${this.speed} km/h`);
    }
    speedUp(amount) {
        super.speedUp(amount);
        console.log(`Tên xe: ${this.name},id: ${this.id},Tốc độ tăng lên hiện tại: ${this.speed} km/h`);
    }
    showSpeed() {
        super.showSpeed();
        console.log(`Gear: ${this.gear}`);
    }
}
let bicycle = new Bicycle("z100", 10, 20, 1);
bicycle.slowDown(2);
bicycle.showSpeed();
bicycle.speedUp(10);
bicycle.showSpeed();
