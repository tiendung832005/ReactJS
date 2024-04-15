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
