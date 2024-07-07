import React, { useState } from 'react'
import './CSS/LoginSignup.css'


const url = 'https://ecommerce-backend-zsxd.onrender.com'
const Login = () => {
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async ()=>{
    console.log("sign up",formData)
    let responsedata;
    await fetch(`${url}/login`,{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responsedata = data)
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace("/");
    }
    else{
      alert(responsedata.error)
    }
  }
  const signup = async ()=>{
    console.log("sign up",formData)
    let responsedata;
    await fetch(`${url}/signup`,{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responsedata = data)
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace("/");
    }
    else{
      alert(responsedata.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignupcontainer">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "SignUp"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='your name' /> : ""}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='email address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state === "SignUp"? <p className="loginsignup-login">Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>:""}
        {state === "Login"? <p className="loginsignup-login">Create an account?<span onClick={()=>{setState("SignUp")}}>Click here</span></p>:""}
       
        <div className="loginsignup-agree">
          <input type="checkbox" name = '' id = '' />
          <p>By continuing , i agree to the terms of use& privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
