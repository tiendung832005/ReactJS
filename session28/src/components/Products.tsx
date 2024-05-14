import React from 'react'
import Product from './Product'
interface Props{
    products: Products[],
    a: number
}
interface Products{
    name: string,
    id: number,
    price: number,
}
const obj={
    name: "lan anh",
    age: 18,
    address:"hn"
}
export default function Products(props: Props) {
    // dùng destructoring
    const {products} = props;
    
  return (
    <div>
        <ul>
            {products.map((item, index,arr)=>{
                return <Product product={item}></Product>
            })}
        </ul>
        
    </div>
  )
}
