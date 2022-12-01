import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import login from '../../assets/login.png'
import './Login.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import endPoint from '../../utils/endPoint';

const Login = () => {
   
    const [addUser, setAddUser] = React.useState();
    const [user, setUser] = React.useState();
    const [error, setError] = React.useState();
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddUser((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
        setError((prev) => ({
          ...prev,
          [name]: "",
        }));
      };
      

    const handleSubmit = (event)=>{
        event.preventDefault();
        
       fetch('https://test.nexisltd.com/login',{
        // fetch(`${endPoint.signin}`,{
        
        method:'POST',
        body:JSON.stringify(addUser)

       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/test')
       })

    }
    return (
        <div className="hero ">
  <div className="hero-content flex-col  lg:flex-row">
    <div className="text-center w-3/5 lg:text-left">
      <img src={logo} alt="" />
      <img src={login} alt="" />
    </div>
    <div className="card  flex-shrink-0 w-full lg:w-2/5 card-hight shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className='text-center font-semibold text-xl'>Log in Form </h1>
         
        <div className="form-control mt-8">
          
          
          <input
                type="email"
                className="input input-bordered"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(event) => {
                    handleChange(event)
                }}
                
              />
          
        </div>
            

        
        
            <div className="form-control mt-8">
          
         
          <input
                type="password"
                className="input input-bordered"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(event) => {
                    handleChange(event)
                }}
                
              />
              <span className='text-gray-500  text-xs ml-1'>password must be 8 character</span>
          
        </div>
        
        
            <div className="form-control mt-14">
            <button type='submit' className="py-2 font-xm drop-shadow-lg  flex items-center justify-center text-white rounded-xl w-1/2 mx-auto signup">Login</button>
          </div>
            
      </form>
      <div className='text-center mb-4'>

            <h1 className='account'>Don't have an account? <Link to='/signup'><span className='text-color font-semibold'>SIGNUP HERE!</span></Link></h1>
            </div>
    </div>
  </div>
</div>
    );
};

export default Login;