import React from 'react'
import "./register.scss"
export default function Register() {
  return (
    <div className="login-container">
      <h2>Register account</h2>
      <form >
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input 
            type="email" 
            id="email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"  
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Comfirm Password</label>
          <input 
            type="password" 
            id="password"  
          />
        </div>
        <button type="submit">Create an account</button>
      </form>
      <p>Already have an account? <a href="/register">Login here</a></p>
    </div>
  )
}
