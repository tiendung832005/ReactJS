import React from 'react'
interface Props{
    product: Product
}
interface Product{
    name: string,
    id: number,
    price: number,
}
export default function Product(props: Props) {
    const {product} = props;
  return (
    <div>
        tên sản phẩm: {product.name}
        giá: {product.price}
    </div>
  )
}
