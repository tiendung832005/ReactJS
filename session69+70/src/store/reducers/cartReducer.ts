// khởi tạo state
const cart = JSON.parse(localStorage.getItem('cart')||"[]");

// khởi tạo hàm reducer

const cartReducer = (state = cart, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":


        let result = state.findIndex((item:any)=>{
            return item.id === action.payload.id;
        })
            return [...state];
        
        default:
            return state;
    }
}