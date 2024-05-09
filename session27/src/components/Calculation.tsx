import React from 'react'
class Calculation {
  add = (a: number,b: number): number =>{
    return a+b;
  }
  subtract = (a: number,b: number): number => {
    return a - b;
  }
  multiply = (a: number,b: number): number => {
    return a * b;
  }
  divide = (a: number,b: number): number => {
    return a / b;
}
}
export default function B2() {
    const a: number=10;
    const b: number=10;

    const calculation = new Calculation();
  return (
    <div>
      Bài 2
        <h2>Danh sách kết quả</h2>
        <p>{a} + {b} = {calculation.add(a, b)}</p>
        <p>{a} - {b} = {calculation.subtract(a, b)}</p>
        <p>{a} * {b} = {calculation.multiply(a, b)}</p>
        <p>{a} / {b} = {calculation.divide(a, b)}</p>
    </div>
  )
}
