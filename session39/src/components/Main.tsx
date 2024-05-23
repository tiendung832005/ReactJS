import React, { memo } from 'react'
interface Props{
    getIdProduct: Function
}
function Main(props: Props) {
    console.log("re-render",props.getIdProduct);
    
  return (
    <div>Main</div>
  )
}
export default memo(Main)