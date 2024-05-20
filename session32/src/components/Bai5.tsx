import React,{useState} from 'react'

export default function Bai5() {
    const [product, setProduct] = useState({
        productId: '',
        productName: '',
        price: '',
        quantity: ''
      });
    
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value
        }));
      };
    
      const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(product);
      };
  return (
    <div>
      <header>
        <h1>Product Form</h1>
        <form>
          <div>
            <label>
              Mã sản phẩm:
              <input
                type="text"
                name="productId"
                value={product.productId}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Tên sản phẩm:
              <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Giá:
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Số lượng:
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  )
}
