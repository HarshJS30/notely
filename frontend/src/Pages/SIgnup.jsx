import React from "react";
import '../assets/second.css';
import { useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate();
  return (
    <div className="form">
      <h1>Welcome to Notely</h1>
      <h3>Please enter your details to signup</h3>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="lgn">Sign in</button>
        <a onClick={()=>navigate('/login')}>Dont have an account? Click here</a>
        <hr className="hr1"/>
        <p>OR</p>
        <hr className="hr2"/>
        <button className="google">Sign in with google</button>
      </form>
    </div>
  );
}
