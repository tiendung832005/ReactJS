// khởi tạo state
const cart = JSON.parse(localStorage.getItem('cart')||"[]");

// khởi tạo hàm reducer

const cartReducer = (state = cart, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state];
        
        default:
            return state;
    }
}