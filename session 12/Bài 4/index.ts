class Vehicle{
    protected name: string
    protected speed: number
    protected id: number
    constructor(name:string, speed: number, id: number) {
        this.name=name;
        this.speed=speed;
        this.id=id;
    }
    slowDown(amount: number): void{
        this.speed -= amount 
        
    }
    speedUp(amount: number): void{
        this.speed += amount
    }
    showSpeed(): void{
        console.log(`Tên xe: ${this.name},id: ${this.id},Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle{
    private gear: number
    constructor(name:string, speed: number, id: number, gear: number) {
        super(name, speed, id)
        this.gear=gear;
    }
    slowDown(amount: number): void{
        super.slowDown(amount)
        console.log(`Tên xe: ${this.name},id: ${this.id},Tốc độ giảm đi hiện tại: ${this.speed} km/h`);
    }
    speedUp(amount: number): void{
        super.speedUp(amount);
        console.log(`Tên xe: ${this.name},id: ${this.id},Tốc độ tăng lên hiện tại: ${this.speed} km/h`);

    }
    showSpeed(): void{
        super.showSpeed();
        console.log(`Gear: ${this.gear}`);
    }
}
let bicycle = new Bicycle("z100",10,20,1)

bicycle.slowDown(2);
bicycle.showSpeed();

bicycle.speedUp(10);
bicycle.showSpeed();



