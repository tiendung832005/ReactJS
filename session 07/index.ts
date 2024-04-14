/*
    1.array


*/
let numbers:number[]=[1,2,3,4,5];
// Khai báo mảng numbers các phần tử trong mảng number phải là number
let students:string[]=["hoa","hồng","huệ"]

/*
    let object
*/
let obj={
    name: "minh thu",
    address:"hn",
    id:1
}
let obj1:{
    name:string,
    address:string,
    id:number,
}={
    name:"minh thu",
    address:"hn",
    id: 1,
}
/*
    3. ENUM

*/
enum Role{
    ADMIN, //sẽ đánh từ số 0
    USER
}
let person:{
    name:string,
    address: string,
    role:Role.USER
}={
    name: "ngọc",
    address: "hn",
    role: 1,
}

/*
    void: áp dụng với function
    -khi hàm không trả về kết quả gì?
    -khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
*/

    function sayHello(){
        console.log("hello");
    }
    sayHello();

    function sum(a:number,b:number){
        return a+b;
    }
    console.log(sum(3,5));

/*
    5. Kiểu unknown
        tương tự kiểu dữ liệu any nhưng chặt hơn
        khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
*/
    function test(a:any){
        console.log(a.toUpperCase());//Viết hoa từ đó lên
    }
    test("5")

    function test1(a:unknown){
        // bắt buộc phải kiểm tra kiểu dữ liệu trước khi đi thực hiện phép tính
        console.log("111111111",typeof(a));

        if(typeof(a)==="string"){
            console.log(a.toLocaleUpperCase());
            
        }
    }
    test1("text")

/*
    6. Type never
    Thường dùng trong các vòng lặp vô tận
    tức là các vòng lặp chạy không có điểm dừng
    để đo giá trị:
*/
    function typeNever():never {
        let a:number=1;
        while(true){
            console.log("Giá trị a", ++a);
        }
    }
    typeNever()                  

    