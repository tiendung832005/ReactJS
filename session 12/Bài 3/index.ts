class Person1{
    name: string
    constructor(name:string) {
        this.name=name;
    }
    displayInfo(): void{
        console.log(`Name: ${this.name}`);
    }
}
class Student3 extends Person1{
    id: number
    constructor(name:string, id: number) {
        super(name)
        this.name=name;
        this.id=id
    }
    displayInfo(): void{
        super.displayInfo();
        console.log(`Id: ${this.id}`);
    }
}
let student = new Student3("dũng", 1);
student.displayInfo();