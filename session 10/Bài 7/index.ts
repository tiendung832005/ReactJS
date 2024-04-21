class Circle{
    private radius1: number;
    constructor(radius: number) {
        this.radius1 = radius;
    }
    area(): number{
        return Math.PI * this.radius1 ** 2;
    }
    perimeter(): number{
        return 2*Math.PI*this.radius1
    }
    getRadius(): number{
        return this.radius1;
    }
    setRadius(radius1: number): void{
        this.radius1 = radius1
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