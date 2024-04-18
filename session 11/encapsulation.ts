/*
    cách khởi tạo class

*/
class Student1 {
    // khai báo các thuộc tính 
    private name:string
    // mặc định nếu không điền thì sẽ là public
    // bên ngoài class student có thể truy cập được
    constructor(name:string){
        this.name=name;
    }
    // nơi khai báo các phương thức
    // thấy có phương thức lấy tên người đó
    getName(){
        return this.name
    }
    //  thấy có phương thức thay đổi tên người đó
    // có tham số nhận vào và không cần return
    setName(newName:string){
        this.name=newName;
    }
}
//  instance nghĩa là đi tạo đối tượng từ class
let std11 = new Student1("minh thu");
let std2 = new Student1 ("hoa");
std11.setName("tien dung");
console.log(11111111, std11.getName());
console.log("std2", std11);

/*
    access modifier: phạm vi truy cập
    3 phạm vi: 
        1. public
         - thì bên ngoài có thể truy cập được
        2. private
         - chỉ truy cập được ở bên trong class, bên ngoài không truy cập được
         + Muốn thay đổi thì làm ntn?
         - mình phải tạo ra các phương thức để lấy giá trị và cập nhật giá trị
        3. protected
         - chỉ được truy cập ở bên trong class và subClass(class con kế thừa)
*/