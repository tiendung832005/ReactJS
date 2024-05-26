import React from 'react';
import './App.css';

function App() {
  return (
    <div className="w-[80%] m-auto mt-4 h-[100vh]">
      <main className="main">
        <header className="d-flex justify-content-between mb-3">
          <h3>Nhân viên</h3>
          <button className="btn btn-primary">Thêm mới nhân viên</button>
        </header>
        <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
          <input
            style={{ width: '350px' }}
            type="text"
            className="form-control"
            placeholder="Tìm kiếm theo email"
          />
          <i className="fa-solid fa-arrows-rotate" title="Refresh"></i>
        </div>
        {/* Danh sách nhân viên */}
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {/*  */}
          </tbody>
        </table>
        <footer className="d-flex justify-content-end align-items-center gap-3">
          <select className="form-select">
            <option selected>Hiển thị 10 bản ghi trên trang</option>
            <option>Hiển thị 20 bản ghi trên trang</option>
            <option>Hiển thị 50 bản ghi trên trang</option>
            <option>Hiển thị 100 bản ghi trên trang</option>
          </select>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;
