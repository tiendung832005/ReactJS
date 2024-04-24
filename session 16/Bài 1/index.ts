abstract class Shape2{
    name: string
    constructor(name: string) {
        this.name=name;
        
    }
    //  viết theo phương thức normal
    getName(){
        return `hinhf là ${this.name}`
    }
    //  viết theo kiểu abstract
    abstract getSize(): void
}
class Rectangle extends Shape2{
    width: number
    height: number
    constructor(name: string, width: number, height: number) {
        super(name)
        this.width=width;
        this.height=height
    }
    getSize(): void{
        console.log(`Chieeuf dài ${this.width}`);
        console.log(`Chieeuf rộng ${this.height}`);
        
    }
}
let rectangle1 = new Rectangle("hình tròn", 5,6);
console.log("tên", rectangle1.getName());
