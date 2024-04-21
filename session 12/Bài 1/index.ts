class Employee1{
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
class Manager extends Employee1{
    teamSize: string
    constructor(name: string, company: string, phone: string, teamSize: string){
        super(name, company, phone)
        this.teamSize= teamSize;
    }
}
