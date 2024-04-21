/*
    Tính kế thừa
    - là tính chất thể hiện bởi class con kế thừa class cha thì sẽ có các thuộc tính
    và phương thức của lớp cha.
    - Giúp tái sử dụng lại đoạn code
    1 class con có thể kế thừa bao nhiêu class cha
    ==> nhiều
    1 class cha có thể cho bao nhiêu class con kế thừa
    ==> nhiều

*/
// khai báo class cha
class Parent{
    name:string
    id: number
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
    // Khai báo cho class parent có phương thức showInfo 
    showInfo():void{
        console.log(`xin chào ${this.name}`);
    }
    // phương thức thay đổi name
    setName(newName: string): string{
        return this.name=newName
    }
}
// khởi tạo class con kế thừa class cha
// để kế thừa dùng từ khóa: EXTENDS
class Child extends Parent{
    constructor(name: string, id: number){
        super(name, id) // phải đặt trên đầu của constructor
        this.name=name;
        this.id=id;
    }
}
// khởi tạo đối tượng con
let child = new Child("minh thu",11);

//  khi class Child kế thừa class Parent thì sẽ kế thừa các thuộc tính và phương thức của nó
console.log("111111",child.showInfo());
child.setName("sơn tòng");
console.log("tên mới: ", child.name);

