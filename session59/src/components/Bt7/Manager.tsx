import React, { useEffect, useReducer, useState } from 'react'
import "./manager.css"
import axios from 'axios'
interface Users{
    id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    status: boolean;
}
export default function Manager() {
    const [users, setUsers]=useState<Users[]>([])
    useEffect(() =>{
        axios.get('http://localhost:8080/users')
        .then(res=>{
            console.log("giá trị data trả về", res);
            
        })
        .catch(err=>console.log(err))
    },[])
  return (
 <>
       <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                Quản lý <b>sinh viên</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
                href="#addEmployeeModal"
                className="btn
                              btn-success"
                data-toggle="modal"
              >
                <i className="material-icons"></i>
                <span>Thêm mới sinh viên</span>
              </a>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label htmlFor="selectAll" />
                </span>
              </th>
              <th>Tên sinh viên</th>
              <th>Email</th>
              <th>Địc chỉ</th>
              <th>Số điện thoại</th>
              <th>Lựa chọn</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item)=>{
                return <tr key={item.id}>
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox5"
                      name="options[]"
                      defaultValue={1}
                    />
                    <label htmlFor="checkbox5" />
                  </span>
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>(+84) {item.phone}</td>
                <td>
                  <a
                    href="#editEmployeeModal"
                    className="edit"
                    data-toggle="modal"
                  >
                    <i
                      className="material-icons"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      
                    </i>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    className="delete"
                    data-toggle="modal"
                  >
                    <i
                      className="material-icons"
                      data-toggle="tooltip"
                      title="Delete"
                    >
                      
                    </i>
                  </a>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">
            Hiển thị <b>5</b>/<b>10 </b>bản ghi
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">Trước</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                Sau
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  {/* Edit Modal HTML */}
  <div id="addEmployeeModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Thêm mới sinh viên</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Tên sinh viên</label>
              <input type="text" className="form-control"  />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control"  />
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <textarea
                className="form-control"
                
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="text" className="form-control"  />
            </div>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Cancel"
            />
            <input
              type="submit"
              className="btn btn-success"
              defaultValue="Add"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Edit Modal HTML */}
  <div id="editEmployeeModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Sửa thông tin sinh viên</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Tên sinh viên</label>
              <input type="text" className="form-control"  />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control"  />
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <textarea
                className="form-control"
                
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="text" className="form-control"  />
            </div>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Thoát"
            />
            <input type="submit" className="btn btn-info" defaultValue="Lưu" />
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Delete Modal HTML */}
  <div id="deleteEmployeeModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Xóa nhân viên</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <p>Bạn chắc chắn muốn xóa sinh viên&lt;ST001&gt;?</p>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Hủy"
            />
            <input
              type="submit"
              className="btn btn-danger"
              defaultValue="Xóa"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
 </>
  )
}
