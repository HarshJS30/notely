import React, { useState } from "react";
import '../assets/second.css';
import { useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true)
        setError('');
        try{
            const res = await fetch('http://localhost:4000/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify({email,password})
            });
            const data = await res.json();
            if(res.ok){
                navigate('/dashboard');
            }else{
                setError(data.message || 'Try again')
            }
        }catch(err){
            console.error(err);
            setError('Something went wrong on our side. Please try again later.')
        }finally{
            setLoading(false);
        }
    }
  return (
    <div className="form">
      <h1>Welcome to<span>Notely</span></h1>
      <h3>Please enter your details to signup</h3>
      <div className="error"><p>{error}</p></div>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="lgn" onClick={handleSubmit}>Sign in</button>
        <a onClick={()=>navigate('/login')}>Dont have an account? Click here</a>
        <hr className="hr1"/>
        <p>OR</p>
        <hr className="hr2"/>
        <button className="google">Sign in with google</button>
      </form>
    </div>
  );
}
