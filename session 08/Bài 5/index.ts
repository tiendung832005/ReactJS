let testUnion:number | string | undefined =5;
testUnion="hồng"

let numberTestUnion: (number|string)[]=[1,2,3,4,5]
let b2:number=6;

type typeA={
    name: string,
    address: string,
    phone: string,
}
type typeB={
    email: string,
}
type typeC=typeA&typeB
let testType:A={
    name: "dũng",
    address: "hà nội",
    phone: "098764324"
}
let testType1:C={
    name: "phong",
    address: "hcm",
    phone: "55555",
    email: "phong@gmail.com"
}

/*
  - Union Types và Intersection Types là hai loại kiểu mở rộng trong TypeScript,
    cho phép bạn tạo ra các kiểu phức tạp từ các kiểu cơ bản hoặc đã tồn tại.

    Union Types cho phép bạn khai báo một biến có thể là một trong nhiều kiểu khác nhau.

    Intersection Types cho phép bạn kết hợp các kiểu để
    tạo ra một kiểu mới có tất cả các thuộc tính từ tất
    cả các kiểu khác nhau.
 */

