import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className="login-container">
      <h2>Login account</h2>
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
        <button type="submit">Login an account</button>
      </form>
      <p>Already have an account? <a href="/register">Register here</a></p>
    </div>
  )
}
