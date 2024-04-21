class Product{
    protected name: string
    protected price: number
    constructor(name: string, price: number) {
        this.name=name;
        this.price=price;
    }
    getDescription(): void{
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}
class  Electronics extends Product{
    private brand: string;
    constructor(name: string, price: number, brand: string) {
        super(name, price)
        this.brand=brand;
    }
    getDescription(): void{
        console.log(`Name: ${this.name}, Price: ${this.price}, Brand: ${this.brand}`);
    }
}
const electronics = new Electronics("iphone15",20000000, "apple");
electronics.getDescription();
