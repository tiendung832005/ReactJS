"use strict";
class Employee3 {
    constructor(name) {
        this.name = name;
    }
}
//  cách khởi tạo đối tượng abstraction
//  thêm từ khóa abstrac vào đầu class
// intance: 
// let emp1 = new Employee3("trang");
// emp1 dc gọi là 1 intance của class Employee
// Đối với abstraction thì không cho phép tạo đối tượng(intance) được 
/*
    tạo 1 class con kế thừa employee
    implement: triển khai
    bắt buộc phải triển khai tất cả các phương thức của class cha (abstract)

*/
class Employee4 extends Employee3 {
    constructor(address, name) {
        super(name);
        this.address = address;
    }
}
class Students3 extends Employee3 {
    constructor(age, name) {
        super(name);
        this.age = age;
    }
    getFullName() {
    }
}
class Person2 {
    constructor(name) {
        this.name = name;
    }
    getFullName() {
    }
}
class Person3 extends Person2 {
}
