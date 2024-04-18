"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}
let department = new Department(1, "dũng", ["long", "hoa", "huy"]);
department.describe();
