import React, { Children } from 'react'
import Child from './Child'
const Parent: React.FC = () => {
    const product = {
        id: 1,
        name: "Nguyễn Minh Sơn",
        price: 1000,
        quantity: 100
    }

  return (
    <div>

        <Child product={product}></Child>
    </div>
  )
}
export default Parent;
