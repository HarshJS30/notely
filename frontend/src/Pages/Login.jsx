import React from "react";
import '../assets/second.css';

export function Login() {
  return (
    <div className="form">
      <h1>Welcome Back to Notely</h1>
      <h3>Please enter your details to login</h3>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button>Login</button>
        <button>Login with google</button>
      </form>
    </div>
  );
}
