class  Employee{
    name: string
    protected company: string
    private phone: string
    constructor(name:string, company: string, phone: string){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    printInfo(): void{
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
        
    }
}

let employee = new Employee("dũng", "PTIT", "0912345687");

employee.printInfo();