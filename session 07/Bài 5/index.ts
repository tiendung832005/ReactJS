function testAny(a:any){
    console.log(a.toUpperCase());
}
testAny("Hello");

function testUnknown(a:unknown){
    console.log("111111111",typeof(a));
    if(typeof(a)==="string"){
        console.log(a.toLocaleUpperCase());
    }
}
testUnknown("text")


// any: cho phép thực hiện các thao tác mà không cần phải kiểm tra kiểu dữ liệu
// unknown: bắt buộc phải kiểm tra kiểu dữ liệu trước khi đi thực hiện phép tính
