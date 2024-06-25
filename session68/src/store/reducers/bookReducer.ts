import {Book} from "../../interface/interface";
//  khởi tạo state 
// const initialBook:Book[] = JSON.parse(localStorage.getItem("book")||"[]");
const initialBook: Book[] = [
    {
        id: 1,
        name: "dạy con làm giàu",
        borrow: "24/06/2025",
        pay: "25/06/2024",
        student: "huyền",
        status: false,
    },
    {
        id: 2,
        name: "cha giàu cha nghèo",
        borrow: "24/06/2025",
        pay: "25/06/2024",
        student: "trang",
        status: false,
    },
    {
        id: 3,
        name: "tôi thấy hoa vàng trên cỏ xanh",
        borrow: "24/06/2025",
        pay: "25/06/2024",
        student: "quỳnh",
        status: false,
    },

]
//  tạo hàm
// chức năng của hàm reducer là tính toán trả về state mới dựa vào action
// action (những công việc mà mình muốn thêm, sửa, xóa)

export const bookReducer = (state= initialBook, action: any)=>{
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, action.payload];
        case "DELETE_BOOK":
            return state.filter(book => book.id !== action.payload);
        case "UPDATE_STATUS":
            console.log("đang tiến hành update");
            return state.map(book => 
                book.id === action.payload.id ? { ...book, status: action.payload.status } : book
            );
        case "UPDATE_BOOK":
            return state.map(book =>
                book.id === action.payload.id ? { ...book, ...action.payload.updatedBook } : book
            );
        default:
            return state;
    }
}