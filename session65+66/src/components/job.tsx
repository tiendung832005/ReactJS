import React from 'react'
import { useSelector } from 'react-redux'

export default function job() {
    const stateJob = useSelector((state:any)=>{
        return state.jobReducer
    })
  return (
    <div>
        {stateJob.jobReducer.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
        
    </div>
  )
}
