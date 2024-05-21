import React, { useState } from 'react'
interface Products{
  id: number;
  name: string;
  price: string;
  quantity: number;
}
export default function Bai2() {
    const[product, setProduct] = useState<Products>({
      id: 1,
      name: "coca cola",
      price: "1000 $",
      quantity: 10,
    })
  return (
    <div>
      <h3>Thông tin sản phẩm</h3>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>

    </div>
  )
}
