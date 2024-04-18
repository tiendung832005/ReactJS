class Student2{
    id: number
    age: number
    email: string
    constructor(id: number,age: number, email: string){
        this.id=id;
        this.age=age;
        this.email=email;
    }
}
let students2: Student2[]=[];

let long = new Student2(1, 18, "long@gmail.com");
let hoa = new Student2(2, 19, "hoa@gmail.com");
let huy = new Student2(3, 20, "huy@gmail.com");


students2.push(long);
students2.push(hoa);
students2.push(huy);
students2.forEach((item,index,arr)=>{
    console.log(`Student ${index + 1}: ID - ${item.id}, Age - ${item.age}, Email - ${item.email}`);
})

