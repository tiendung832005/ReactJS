import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const countState:any = useSelector(state=>{
        return state;
    })
    const dispatch = useDispatch();
    const increase=()=>{
        dispatch(
        {
            type: 'INCREASE'
        }
        )
    }
    const decrease=()=>{
        dispatch(
        {
            type: 'DECREASE'
        }
        )
    }
  return (
    <div>
        <p>Giá trị biến count: {countState}</p>
        <button>Tăng</button>
        <button>Giảm</button>
    </div>
  )
}
