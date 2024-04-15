"use strict";
function isSquare(shape) {
    return shape.kind === "square";
}
function calculateSquareArea(square) {
    return square.sideLength ** 2;
}
function calculateCircleArea(circle) {
    return Math.PI * circle.radius ** 2;
}
function calculateArea(shape) {
    if (isSquare(shape)) {
        return calculateSquareArea(shape);
    }
    else {
        return calculateCircleArea(shape);
    }
}
let square = { kind: "square", sideLength: 2 };
let circle = { kind: "circle", radius: 4 };
console.log("Diện tích của hình vuông: ", calculateArea(square));
console.log("Diện tích của hình tròn: ", calculateArea(circle));
