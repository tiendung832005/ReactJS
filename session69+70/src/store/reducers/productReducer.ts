// khởi tạo state
import { Product } from '../../interface/index.ts'

const products:Product[]=[
    {
        id: 1,
        image: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true",
        name: "pizza",
        price: 100000,
        stock: 5,
        description: "",
    },
    {
        id: 2,
        image: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/bread.jpg?raw=true",
        name: "bánh mỳ",
        price: 20000,
        stock: 5,
        description: "",
    },
    {
        id: 3,
        image: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Hamburger.jpg?raw=true",
        name: "hamberger",
        price: 10000,
        stock: 5,
        description: "",
    },
    {
        id: 4,
        image: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Cake.jpg?raw=true",
        name: "bánh kem",
        price: 10000,
        stock: 5,
        description: "",
    },
    
];
const productReducer=(state = products, action:any)=>{
    switch(action.type) {
        case "":
           return [...state]
        default:
            return state;
    }
}
export default productReducer;





