import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function ProductDetail() {
    let products=[
        {
            id:1,
            name: "mèn mén",
            price: 5000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3ow0Btz22zLMeBoCKOwrZF6Ce7MebEY52w&s",
            description: "mèn mén đến từ Hà Giang"
        },
        {
            id:2,
            name: "mèn mén",
            price: 6000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskTveFEgv10CzbWoF-OLmnlG5Z5AruOgoKQ&s",
            description: "mèn mén đến từ Lào Cai"

        },
        {
            id:3,
            name: "mèn mén",
            price: 7000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG35LDc9b9VAR0r_G9A-eYh_1N-Ri8P-83RQ&s", 
            description: "mèn mén đến từ Hà Giang"

        },
    ]
    // dungf hoook useParams
    const params = useParams()

    // lấy id ra
    let id = params.menmenId;

    let productDetail = products.find((item)=>{
        return item.id === Number(id);
    })
  return (
    <div>ProductDetail
        <p>name:{productDetail?.name}</p>
        <p><img src={productDetail?.img} alt="" /></p>
        <p>mô tả:{productDetail?.description}</p>
    </div>
  )
}
