class Department {
    readonly id: number
    private name: string
    private employee: string[]
    constructor(id: number, name: string, employee: string[]){
        this.id=id;
        this.name=name;
        this.employee=employee
    } 
    describe(): void{
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

let department = new Department(1, "dũng", ["long", "hoa", "huy"])

department.describe();