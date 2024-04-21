"use strict";
class Person1 {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student3 extends Person1 {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Id: ${this.id}`);
    }
}
let student = new Student3("dũng", 1);
student.displayInfo();
