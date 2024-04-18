/*
    1. union: kiểu kết hợp

    2. intersection: kiểu kết hợp & 

*/
let a1:number | string | undefined =5;
a1="hồng"
// tham chiếu (array)

let number1: (number|string)[]=[1,2,3,4,5]
let b1:number=6;

//
type A={
    name: string,
    address: string,
    phone: string,
}
type B={
    email: string,
}
type C=A&B
let objj:A={
    name: "hoa",
    address: "hà nội",
    phone: "098764324"
}
let objj1:C={
    name: "hồng",
    address: "hcm",
    phone: "55555",
    email: "hong@gmail.com"
}

let std={
    age: 18,
    address: "sơn la"
};
console.log(1111,(std));

let c1 = {
    name: 1,
    age: 18,
    address: "sơn la"
}
console.log(22222222,(c1));
// alias
let userName1:string|number; //đây là union

type user = string|number;  // kiểu alias(bí danh)

// tuple
let array:(number|string)[]=["hoa", "minh"];
let array1:[number,string];
array1=[2,"2"];
array1.push(6);