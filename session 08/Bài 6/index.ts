function testString(a: string | string[]){
    if (typeof a === "string") {
      console.log(a);
    } else if (Array.isArray(a)) {
      a.forEach((item) =>{
        console.log("11111111", item)
      });
    }
  }
  
  testString('Hello, PTIT!'); 
  
  testString(['dũng', 'phong', 'đức']); 