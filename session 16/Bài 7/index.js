"use strict";
class Student4 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudent = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudent(id) {
        let index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            let student = this.students[index];
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
            this.students.splice(index, 1);
        }
        else {
            console.log('K tìm thấy hs');
        }
    }
}
const stds1 = new Student("dũng", 1);
const stds2 = new Student("lan", 2);
const stds3 = new Student("huy", 3);
const stds4 = new Student("hà", 4);
const stds5 = new Student("quân", 5);
const stds6 = new Student("thu", 6);
let classroom1 = new Classroom();
let classroom2 = new Classroom();
console.log('Classroom 1:');
classroom1.showStudent(1);
classroom1.showStudent(2);
classroom1.showStudent(3);
console.log('Classroom 2:');
classroom1.showStudent(4);
classroom1.showStudent(5);
classroom1.showStudent(6);
