import React, {useState} from 'react'

export default function Bai6() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };
    
      const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
          alert('Mật khẩu và Nhập lại mật khẩu không khớp');
          return;
        }
        console.log({
          name: user.name,
          email: user.email,
          password: user.password
        });
      };
  return (
    <div>
      <header>
        <h1>Thêm mới tài khoản</h1>
        <form>
          <div>
            <label>
              Tên:
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Mật khẩu:
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Nhập lại mật khẩu:
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
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
