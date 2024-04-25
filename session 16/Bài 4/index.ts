interface Geometry {
    calculatePerimeter(): number;
    calculateArea(): number;
}

class Circle2 implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle2 implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

let circle = new Circle2(10);
console.log("Diện tích:", circle.calculateArea());
console.log("Chu vi hình tròn:", circle.calculatePerimeter());

let rectangle = new Rectangle2(6, 8);
console.log("diện tích hcn:", rectangle.calculateArea());
console.log("chu vi hcn:", rectangle.calculatePerimeter());
