"use strict";
/*
    1. union: kiểu kết hợp

    2. intersection: kiểu kết hợp &

*/
let a1 = 5;
a1 = "hồng";
// tham chiếu (array)
let number1 = [1, 2, 3, 4, 5];
let b1 = 6;
let objj = {
    name: "hoa",
    address: "hà nội",
    phone: "098764324"
};
let objj1 = {
    name: "hồng",
    address: "hcm",
    phone: "55555",
    email: "hong@gmail.com"
};
let std = {
    age: 18,
    address: "sơn la"
};
console.log(1111, (std));
let c1 = {
    name: 1,
    age: 18,
    address: "sơn la"
};
console.log(22222222, (c1));
// alias
let userName1; //đây là union
// tuple
let array = ["hoa", "minh"];
let array1;
array1 = [2, "2"];
array1.push(6);
