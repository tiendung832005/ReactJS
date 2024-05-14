import React from 'react'
interface Product{
    id: number;
    name: string;
    price: number;
    quantity: number;
}
interface ChildrenProps{
    product: Product
}
const Child: React.FC<ChildrenProps> = ({ product}) =>{
    return (
        <div>
            <p>Họ và tên : {product.name}</p>
        </div>
      )
}
export default Child;

