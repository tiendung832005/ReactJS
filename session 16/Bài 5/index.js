"use strict";
class Vehicle3 {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp(value) {
        this.speed += value;
        console.log(`Tăng tốc còn ${this.speed} km/h`);
    }
    slowDown(value) {
        this.speed -= value;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Giảm tốc còn ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log("Xe dừng lại");
    }
}
let car = new Vehicle3(0);
car.speedUp(80);
car.slowDown(40);
car.stop();
