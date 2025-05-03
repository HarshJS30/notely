import React from "react";
import '../assets/second.css';
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="form">
      <h1>Welcome Back to <span>Notely</span></h1>
      <h3>Please enter your details to login</h3>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="lgn">Login</button>
        <a onClick={()=>navigate('/signup')}>Dont have an account? Click here</a>
        <hr className="hr1"/>
        <p>OR</p>
        <hr className="hr2"/>
        <button className="google">Login with google</button>
      </form>
    </div>
  );
}
