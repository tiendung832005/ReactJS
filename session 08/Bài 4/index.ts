function test2(arrayNumber: number | number[]) {
    if (typeof arrayNumber === "number") {
      return arrayNumber * arrayNumber;
    } else if (Array.isArray(arrayNumber)) {
      return arrayNumber.map((num) => num * num);
    }
  }
  
  let result1 = test2(5);
  console.log(result1); 
  
  let result2 = test2([1, 2, 3, 4, 5]);
  console.log(result2); 