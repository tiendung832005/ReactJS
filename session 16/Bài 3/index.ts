/*
Abstract method là một phương thức không có thân hàm (implementation) và được khai báo trong một lớp trừu tượng. 
Một lớp trừu tượng không thể được khởi tạo, và nó phải được kế thừa bởi một lớp con.
Mỗi lớp con của lớp trừu tượng đó phải triển khai (override) tất cả các phương thức trừu tượng của lớp cha.
*/

abstract class Animal {
    abstract makeSound(): void; // Abstract method
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Gâu gâu');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Meo meo');
    }
}

const dog = new Dog();
dog.makeSound();


const cat = new Cat();
cat.makeSound(); 

/*
Một method (hoặc phương thức) là một hàm được định nghĩa bên trong một lớp 
và được sử dụng để thực hiện một hành động hoặc tính toán.
Một method có thể có thân hàm hoặc không.
*/
class Calculator{
    add(a: number, b: number): number { 
        return a+b;
    }

    subtract(a: number, b: number): number { 
        return a-b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(7, 5));
console.log(calculator.subtract(7, 5));
