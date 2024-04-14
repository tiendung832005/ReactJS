"use strict";
function testVoid() {
    console.log("hello");
}
testVoid();
function testNever() {
    let a = 1;
    while (true) {
        console.log("Giá trị a", ++a);
    }
}
testNever();
// void: sử dụng khi 1 hàm không trả về bất kì giá trị nào, hoặc khi muốn một hàm không cần trả về giá trị
// never: Thường dùng trong các vòng lặp vô tận, tức là các vòng lặp chạy không có điểm dừng để đo giá trị
