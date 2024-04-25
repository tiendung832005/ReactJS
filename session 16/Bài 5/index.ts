interface ChangeSpeed {
    stop(): void;
    slowDown(value: number): void;
    speedUp(value: number): void;
}

class Vehicle3 implements ChangeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(value: number): void {
        this.speed += value;
        console.log(`Tăng tốc còn ${this.speed} km/h`);
    }

    slowDown(value: number): void {
        this.speed -= value;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Giảm tốc còn ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log("Xe dừng lại");
    }
}

let car = new Vehicle3(0);

car.speedUp(80);  
car.slowDown(40); 
car.stop();       
