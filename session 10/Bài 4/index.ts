class Vehicle1{
    name: string
    protected year: number
    private company: string
    readonly id: number
    constructor(name: string, year: number, company: string, id: number) {
        this.name=name;
        this.year=year;
        this.company=company;
        this.id=id;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}

let vehicle1 = new Vehicle1("vision", 2024, "honda", 10);

vehicle1.printInfo();
