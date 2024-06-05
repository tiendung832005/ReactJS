import React, { useState }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const [userOptionsVisible, setUserOptionsVisible] = useState(false);

  const toggleUserOptions = () => {
    setUserOptionsVisible(!userOptionsVisible);
  };
export default function Home() {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
          <img src="../asset/image/2021-mercedes-star-in-ring-100th-anniversary-10.jpg" alt="" />
          Mercedes-Benz
        </a>
        <div className="bx-menu" id="menu-icon" style={{ color: '#fff' }}>
          <span className="material-symbols-outlined">menu</span>
        </div>
        <ul className="navbar">
          <li><a href="#home" className="timxe" style={{ textDecoration: 'none' }}>Tìm xe</a></li>
          <li><a href="#services" style={{ textDecoration: 'none' }}>Sản phẩm</a></li>
          <li><a href="#about" style={{ textDecoration: 'none' }}>Lịch sử</a></li>
          <li><a href="#reviews" style={{ textDecoration: 'none' }}>Đánh giá</a></li>
        </ul>
        <div className="header-btn">
          <a href="./register.html" className="sign-up" style={{ display: 'none', textDecoration: 'none' }}>Đăng kí</a>
          <a href="./login.html" className="sign-in" style={{ display: 'none', textDecoration: 'none' }}>Đăng nhập</a>
          <span className="las la-user" id="userLogin" style={{ color: '#ffa07a', display: 'block', cursor: 'pointer' }} onClick={toggleUserOptions}></span>
          {userOptionsVisible && (
            <div id="userOptions" style={{ display: 'block', position: 'absolute', background: '#fff', padding: '10px', zIndex: 1 }}>
              <div className="user">
                <a href="#" id="myAccount" style={{ color: 'black', textDecoration: 'none' }}>Tài khoản của tôi</a>
                <a href="../pages/cart.html" id="myOrders" style={{ color: 'black', textDecoration: 'none' }}>Đơn mua</a>
                <a href="#" id="logout" style={{ color: 'black', textDecoration: 'none' }}>Đăng xuất</a>
              </div>
            </div>
          )}
          <br />
          <a href="../pages/cart.html">
            <span className="material-symbols-outlined icon-shopping" style={{ color: '#fff', marginTop: '40px', cursor: 'pointer' }}>shopping_cart</span>
          </a>
          <a href="../pages/cart.html" style={{ textDecoration: 'none' }}>
            <span style={{ color: '#fff' }}>GIỎ HÀNG <br /></span>
          </a>
        </div>
      </header>
      {/* Header end */}

      {/* Home start */}
      <div id="carouselExample" className="carousel slide" style={{ marginTop: '130px' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../asset/image/car3 c300 amg.jpg" className="d-block w-100" width="200px" height="600px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../asset/image/car4 e200 exclusive.jpg" className="d-block w-100" width="200px" height="600px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../asset/image/car6 maybach s680 4matic.jpg" className="d-block w-100" width="200px" height="600px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../asset/image/car2 glb 200 amg.jpg" className="d-block w-100" width="200px" height="600px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../asset/image/car5 glc300 4matic.jpg" className="d-block w-100" width="200px" height="600px" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="home" id="home">
        <div className="text">
          <h1><span>Tìm xe</span> <br />muốn mua</h1>
          <form id="search-box">
            <input type="text" id="search-text" placeholder="Search..." required />
            <button id="search-btn">
              <span className="material-symbols-outlined">search</span>
            </button>
          </form>
          <img className="img-1" src="../asset/image/Mercedes-Maybach-S-680-4MATIC-Den-Onyx-03.jpg" alt="" />
        </div>
        <div className="form-container">
          <form>
            <div className="input-box">
              <span>Vị trí</span>
              <input type="search" placeholder="Search place" />
            </div>
            <div className="input-box">
              <span>Ngày xem xe</span>
              <input type="date" />
            </div>
            <div className="input-box">
              <span>Ngày mua xe</span>
              <input type="date" />
            </div>
            <input type="submit" className="btn" />
          </form>
        </div>
      </section>
    </div>
  )
}
