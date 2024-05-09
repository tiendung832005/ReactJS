import React from 'react'
interface Products{
    name: string,
    price: number,
    id: number
}

export default function B1() {
    // render dữ liệu đối với function component
    let fullName: string=" minh thu"
    let age: number = 25
    let student ={
        name:"hoa",
        age: 20,
        address: "hà nội"
    }
    let numbers:number[]=[1,4,7,9];
    let students:string[]=["thu","ngọc","lan","phương"]
    let products: Products[] = [
        {
            name: "iphone5",
            price: 5000,
            id: 1
        },
        {
            name: "iphone6",
            price: 6000,
            id: 2
        },
        {
            name: "iphone7",
            price: 7000,
            id: 3
        },
    ]
  return (
    <div>
            <p>B1</p>
            <p>nội dung B1</p>
            <p>Hiển thị full name: {fullName}</p>
            <p>{fullName} năm nay {age} tuổi</p>
            <p>Tên: {student.name}</p>
            <p>Tuổi: {student.age}</p>
            <p>{JSON.stringify(student)}</p>
            <p>Hiển thị mảng (array)</p>
        <ul>
            {numbers.map((item, index, arr)=>{
            return <li key = {index}>{item}</li>
            })}
        </ul>
        <table>
            
                <thead>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>ID</th>
                </thead>
                <tbody>
                    <tr>  
                    <td>{products.map((item,index)=>{
                        return <tr>{item.id}</tr>
                    })}</td>
                    <td>{products.map((item,index)=>{
                        return <tr>{item.name}</tr>
                    })}</td>
                    <td>{products.map((item,index)=>{
                        return <tr>{item.price}</tr>
                    })}</td>
                    <td>{products.map((item,index)=>{
                        return <tr>{item.id}</tr>
                    })}</td>
                    </tr>
                </tbody>
                <tbody>
                </tbody>
        </table>
    </div>
  )
}
/*
    Khi return các elelment thì phải có thẻ fragment bọc bên ngoài
*/

