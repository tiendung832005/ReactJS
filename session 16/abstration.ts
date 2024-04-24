abstract class Employee3{
    name: string
    constructor(name: string) {
        this.name=name;
    }
    // khai báo phương thức đối với abstrac
    abstract getFullName(): void;
    // đối với phương thức tròn abstract thì chỉ tên phương thức, kiểu dữ liệu 
    // trả về và kco phần body
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
abstract class Employee4 extends Employee3{
    address: string;
    constructor(address: string, name: string) {
        super(name);
        this.address=address;
        
    }
}


class Students3 extends Employee3{
    private age: number;
    constructor(age: number, name: string) {
        super(name)
        this.age=age;
    }
    getFullName() {

    }
}
class Person2{
    name: string
    constructor(name: string) {
        this.name=name;
    }
    getFullName(){

    }
}
class Person3 extends Person2{
    // nếu triển khai phương thức của class cha thì gọi và overriding (ghi đề phương thức)
}