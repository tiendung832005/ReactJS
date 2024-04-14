"use strict";
/*
    1.array


*/
let numbers = [1, 2, 3, 4, 5];
// Khai báo mảng numbers các phần tử trong mảng number phải là number
let students = ["hoa", "hồng", "huệ"];
/*
    let object
*/
let obj = {
    name: "minh thu",
    address: "hn",
    id: 1
};
let obj1 = {
    name: "minh thu",
    address: "hn",
    id: 1,
};
/*
    3. ENUM

*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "ngọc",
    address: "hn",
    role: 1,
};
/*
    void: áp dụng với function
    -khi hàm không trả về kết quả gì?
    -khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
*/
function sayHello() {
    console.log("hello");
}
sayHello();
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
/*
    5. Kiểu unknown
        tương tự kiểu dữ liệu any nhưng chặt hơn
        khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
*/
function test(a) {
    console.log(a.toUpperCase()); //Viết hoa từ đó lên
}
test("5");
function test1(a) {
    // bắt buộc phải kiểm tra kiểu dữ liệu trước khi đi thực hiện phép tính
    console.log("111111111", typeof (a));
    if (typeof (a) === "string") {
        console.log(a.toLocaleUpperCase());
    }
}
test1("text");
/*
    6. Type never
    Thường dùng trong các vòng lặp vô tận
    tức là các vòng lặp chạy không có điểm dừng
    để đo giá trị:
*/
function typeNever() {
    let a = 1;
    while (true) {
        console.log("Giá trị a", ++a);
    }
}
typeNever();
