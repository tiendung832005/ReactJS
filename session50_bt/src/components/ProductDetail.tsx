import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const {id} = useParams();
  return (
    <div>ProductDetail
        <p>id: {id}</p>
    </div>
  )
}
