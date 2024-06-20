import axios from 'axios';
import React, { useState } from 'react'
import Loading from '../Loading';

interface Post{
    id: number;
    title: string;
    image: string;
    date: string;
    status: boolean;
}
export default function Posts() {
    const [post, setPost] = useState<Post[]>([]);
    const [isLoad, setIsLoad]= useState<boolean>(true);
    const getPosts = ()=>{
        axios.get("http://localhost:8080/posts")
        .then(res=>{
            console.log("111", res);
            
        })
        .catch(err=>console.log(err)
        )
    }
    let posts = [
        {
            id: 1,
            title: "bài 1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s",
            date: "19/04/2024",
            status: true,
        },
        {
            id: 2,
            title: "next js",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSMfpYd56bTUxZzRIVgDeG1G5MsXJCs14tBl0BdpfETNMFXBoASNB4DPSKCCqfCsC1NI&usqp=CAU",
            date: "19/04/2024",
            status: true,
        },
        {
            id: 3,
            title: "ness js",
            image: "https://s3-ap-southeast-1.amazonaws.com/homepage-media/wp-content/uploads/2020/07/28093657/nestjs.png",
            date: "19/04/2024",
            status: true,
        },

    ]
  return (
    <div>
            <input type="text" placeholder='Nhập nội dung tìm kiếm' />
            <select>
                <option value="">Lọc bài viết</option>
            </select>
            <button>Thêm bài viết</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Ngày viết</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoad ? <tr><td>Loading...</td></tr> : post.map((post, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>
                                <img src={post.image} alt="" style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>{post.date}</td>
                            <td>
                                <button>{post.status ? "Đã xuất bản" : "Ngừng xuất bản"}</button>
                            </td>
                            <td>
                                <button>Chặn</button>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
