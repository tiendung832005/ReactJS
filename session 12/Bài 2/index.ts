class Employee2{
    name: string
    protected company: string
    private phone: string
    constructor(name: string, company: string, phone: string){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    printInfo(): void{
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manager1 extends Employee2{
    teamSize: string
    constructor(name: string, company: string, phone: string, teamSize: string){
        super(name, company, phone)
        this.teamSize= teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`TeamSize: ${this.teamSize}`);
    }
}
let employee1 = new Employee2("dũng", "ptit", "098321312");
employee1.printInfo();

let manager = new Manager1("nam", "rikkei", "093232112", "20");
manager.printInfo();