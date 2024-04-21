class Class {
    private name: string;
    constructor(name: string) {
        this.name=name;
    }
    printInfo(): void{
        console.log(`Tên học sinh: ${this.name}`);
    }
}
const class1 = new Class("dũng");
class1.printInfo(); // In dc ra bthg
// console.log(class1.name); // => không thể truy cập ở ngoài lớp Class

/*
=> Khi một thuộc tính hoặc phương thức được đánh dấu là private, nó chỉ có thể được truy cập từ bên trong cùng 
một lớp. Không thể truy cập hoặc chỉnh sửa thuộc tính hoặc phương thức private từ bên ngoài lớp đó.
*/


class Vehicle2 {
    protected speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    protected showSpeed(): void {
        console.log(`speed: ${this.speed} km/h`);
    }
}
class Motor extends Vehicle2 {
    constructor(speed: number) {
        super(speed)
        this.speed = speed;
    }
    showSpeed(): void {
        super.showSpeed();
        this.speed += 20;
        console.log(`New speed: ${this.speed} km/h`);
    }
}
const motor = new Motor(60);
motor.showSpeed(); 

/*
=> Khi một thuộc tính hoặc phương thức được đánh dấu là protected, nó có thể được truy cập từ bên trong cùng một 
lớp và các lớp con của nó. Tuy nhiên, nó không thể được truy cập từ bên ngoài các lớp này.
*/
