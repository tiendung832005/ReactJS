abstract class Job {
    type: string
    constructor(type: string) {
        this.type=type;
    }
    printType(): void{
        console.log(`Coong việc: ${this.type}`);
        
    }
    abstract  calculateSalary(): number;
}
class PartimeJob extends Job{
    workingHour: number
    constructor(type: string, workingHour: number ) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job{
    constructor(type: string) {
        super(type);
    }
    calculateSalary(): number {
        return 10000000;
    }
}



let partTime = new PartimeJob("part time", 100);
let fullTime = new FulltimeJob("fulltime");

partTime.printType();
console.log(`Luong part time: ${partTime.calculateSalary()} VND                                                                                                                              `);

fullTime.printType();
console.log(`Luonwg full time: ${fullTime.calculateSalary()} VND`);


