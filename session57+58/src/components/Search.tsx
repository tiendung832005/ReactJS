import axios from 'axios'
import React, { useEffect } from 'react'

export default function Search() {
    useEffect(()=>{
        let value:string="o"
        axios.get(`https://localhost:8080/student?name_like=${value}`)
        .then(res=>{
            console.log("hía trị trả về", res);
            
        })
        .catch(err=> console.log(err)
        )
    });
    // Tìm kiếm theo chữu cái bắt đầu
    useEffect(() => {
        let valueQuery: string = "h";
        axios.get(`http://localhost:8080/users?name_like=^${valueQuery}`)
            .then(response => {
                console.log("giá trị trả về tìm kiếm bắt đầu chữ cái", response.data);

            })
            .catch(err => console.log(err))
    }, [])
  return (
    <div>Search
        {/* 
            -Các chức năng tìm kiếm user, sản phẩm
        */}
    </div>
  )
}
