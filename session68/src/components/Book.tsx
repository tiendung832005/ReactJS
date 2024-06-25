import React from 'react'
import { useSelector } from 'react-redux'
import "./style.css"
export default function Book() {
    const books = [
        { id: 1, name: 'Harry Potter và Hòn Đá Phù Thủy', student: 'Nguyễn Văn A', borrow: '10/04/2024', pay: '17/04/2024', status: 'Đã trả' },
        { id: 2, name: 'Đắc Nhân Tâm', student: 'Trần Thị B', borrow: '05/04/2024', pay: '12/04/2024', status: 'Chưa trả' },
        { id: 3, name: '1984', student: 'Lê Văn C', borrow: '02/04/2024', pay: '09/04/2024', status: 'Đã trả' },
        { id: 4, name: 'Tiền Không Mua Được Hạnh Phúc', student: 'Phạm Thị D', borrow: '20/03/2024', pay: '27/03/2024', status: 'Đã trả' },
        { id: 5, name: 'Người Mẹ Tốt Hơn Là Người Thầy Tốt', student: 'Võ Văn E', borrow: '15/03/2024', pay: '22/03/2024', status: 'Chưa trả' },
        { id: 6, name: 'Nghìn Lẻ Một Đêm', student: 'Trần Văn F', borrow: '05/03/2024', pay: '12/03/2024', status: 'Đã trả' },
        { id: 7, name: 'Bắt Trẻ Đồng Xanh', student: 'Phan Thị G', borrow: '01/03/2024', pay: '08/03/2024', status: 'Đã trả' },
        { id: 8, name: 'Cô Bé Mất Tích', student: 'Lý Thị H', borrow: '27/02/2024', pay: '06/03/2024', status: 'Chưa trả' },
        { id: 9, name: 'Bí Mật Của Một Trí Nhớ Siêu Phàm', student: 'Trần Thị K', borrow: '25/02/2024', pay: '03/03/2024', status: 'Đã trả' },
        { id: 10, name: 'Chuyến Tàu Định Mệnh', student: 'Lê Văn L', borrow: '15/02/2024', pay: '22/02/2024', status: 'Đã trả' },
];
const handleUpdateStatus = (id: number)=>{
    const books = useSelector((state:any) => state.books)
    const newBooks = books.map((book:any) => {
      if (book.id === 1) {
        return {...book, status: 'Đã trả' }
      } else {
        return book
      }
    })
    console.log(newBooks)
}
  return (
    <div className="book-management">
      <h2>Quản lý mượn trả sách</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Sinh viên mượn</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.name}</td>
              <td>{book.student}</td>
              <td>{book.borrow}</td>
              <td>{book.pay}</td>
              <td onClick={()=> handleUpdateStatus} className={book.status === 'Đã trả' ? 'status returned' : 'status not-returned'}>
                {book.status}
              </td>
              <td>
                <button className="edit-btn">Sửa</button>
                <button className="delete-btn">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn">Thêm thông tin</button>
    </div>
  )
}
