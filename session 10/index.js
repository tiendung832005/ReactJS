"use strict";
/*
    OOP: lập trình hướng đối tượng
    Object oriented progaram
    là mô hình lập trình dựa vào các đối tượng thực tế
    đối tượng con mèo, đối tượng cái xe ô tô, cái bàn, cái máy tính...
    1 đối tượng sẽ gồm thuộc tính và phương thức
    ví dụ đối tượng con mèo
    thuộc tính: màu lông, màu mắt, nặng ....
    phương thức: bắt chuột, chạy, nhảy ...
    ví dụ về đối tượng cái xe ô tô
    thuộc tính: màu xe, động cơ, nội thất ...
    phương thức: đi lại, che nắng che mưa,
*/
// yêu cầu tạo 1 đối tượng student
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // khai báo các phương thức
    // ví dụ có phương thức get Name
    getName() {
        console.log(`xin chào ${this.name}`);
    }
    getAge() {
        console.log("");
    }
}
// tạo đối tượng dùng từ khóa new
let std1 = new Student("minh thu", 5);
console.log(std1);
// Lấy thuộc tính
// Đối tượng - thuộc tính
console.log("đối tượng std1 có thuộc tính name giá trị là", std1.name);
// gọi phương thức
//  đối tượng. phương thức
console.log("gọi phương thức getitem", std1.getName());
/*
    Các tính chất của lập trình hướng đối tượng
    4 tính chất
    1. đóng gói: encapsulation
    2. kế thừa: inheritance
    3. đa hình: polymorphysm
    4. tính trừu tượng: abstraction


    1. trừu tượng: abstration
    2. bao đóng: encapsulation
    3. kế thừa: inheritance
    4. đa hình: polymorphism
*/
