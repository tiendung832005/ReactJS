"use strict";
/*
Abstract class là một lớp mà không thể được khởi tạo trực tiếp.
Nó được sử dụng để cung cấp một cấu trúc cho các lớp con kế thừa,
và có thể chứa các abstract methods (phương thức trừu tượng) mà các lớp con phải triển khai.
*/
class Animal1 {
}
class Dog1 extends Animal1 {
    makeSound() {
        console.log('Gâu gâu');
    }
}
class Cat1 extends Animal1 {
    makeSound() {
        console.log('Meo meo');
    }
}
const dog1 = new Dog();
dog.makeSound();
const cat1 = new Cat();
cat.makeSound();
/*
Interface là một cấu trúc mà chỉ định các contract (hợp đồng) mà một lớp cần phải tuân thủ.
Nó chỉ định các phương thức và thuộc tính mà một lớp cần phải có, nhưng không cung cấp thân hàm cho chúng.
*/
