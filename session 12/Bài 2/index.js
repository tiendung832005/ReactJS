"use strict";
class Employee2 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manager1 extends Employee2 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`TeamSize: ${this.teamSize}`);
    }
}
let employee1 = new Employee2("dũng", "ptit", "098321312");
employee1.printInfo();
let manager = new Manager1("nam", "rikkei", "093232112", "20");
manager.printInfo();
