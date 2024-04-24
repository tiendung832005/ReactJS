"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Coong việc: ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
let partTime = new PartimeJob("part time", 100);
let fullTime = new FulltimeJob("fulltime");
partTime.printType();
console.log(`Luong part time: ${partTime.calculateSalary()} VND                                                                                                                              `);
fullTime.printType();
console.log(`Luonwg full time: ${fullTime.calculateSalary()} VND`);
