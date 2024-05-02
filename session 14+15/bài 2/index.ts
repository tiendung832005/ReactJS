class Product2 {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class CartProduct extends Product2 {
    quantity: number;
    constructor(id: number, name: string, price: number, quantity: number) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calculatePrice(): number {
        return this.price * this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }

    decreaseQuantity(): void {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }
}

class ShopProduct extends Product2 {
    stock: number;
    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

class Cart {
    items: CartProduct[];
    constructor() {
        this.items = [];
    }

    addItem(shopProduct: ShopProduct, quantity: number): void {
        if (quantity <= shopProduct.stock) {
            const cartProduct = new CartProduct(
                shopProduct.id,
                shopProduct.name,
                shopProduct.price,
                quantity
            );
            this.items.push(cartProduct);
            shopProduct.stock -= quantity;
            console.log(`Đã thêm ${quantity} ${shopProduct.name} vào giỏ hàng.`);
        } else {
            console.log(`Không thể thêm ${quantity} ${shopProduct.name} vào giỏ hàng. Không đủ sản phẩm.`);
        }
    }

    removeItem(cartProduct: CartProduct): void {
        const index = this.items.indexOf(cartProduct);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Đã xóa ${cartProduct.name} từ giỏ hàng.`);
        }
    }

    getTotal(): number {
        let total = 0;
        this.items.forEach((item,index,arr) => {
            total += item.calculatePrice();
        });
        return total;
    }
}

const products: ShopProduct[] = [
    new ShopProduct(1, "iPhone11", 1000, 10),
    new ShopProduct(2, "Samsung S20 Ultra", 800, 15),
    new ShopProduct(3, "iphone 15", 900, 20)
];

const cart = new Cart();
cart.addItem(products[0], 2);
cart.addItem(products[1], 3);
console.log("Tổng:", cart.getTotal());

cart.removeItem(cart.items[0]);
console.log("Tổng sau khi xóa sản phẩm:", cart.getTotal());
