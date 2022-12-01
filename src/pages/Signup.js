import React, { useState } from 'react';
import logo from '../assets/logo.png'
import login from '../assets/login.png'
import './Signup.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [count, setCount] = useState(0);
    const [addUser, setAddUser] = React.useState();
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
       fetch('https://test.nexisltd.com/signup',{
        method:'POST',
        body:JSON.stringify(addUser)

       })
       .then(res => res.json())
       .then(data =>{
         console.log(data);
        navigate('/login')
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
        <h1 className='text-center font-semibold text-xl'>SignUp Form </h1>
        {
            count === 0?
            <>
            <div className="form-control mt-16">
          
          <input
                type="text"
                required
                className="input input-bordered"
                id="firstName"
                name="first_name"
                placeholder="Enter your FirstName"
                onChange={(event) => {
                    handleChange(event)
                }}
                
              />
              
        </div>
        <div className="form-control mt-8">
          
          
          <input
                type="text"
                required
                className="input input-bordered"
                id="lastName"
                name="last_Name"
                placeholder="Enter your lastName"
                onChange={(event) => {
                    handleChange(event)
                }}
                
              />
          
        </div>
        </>
        :
        ''

        }
        {
            count === 1?
            <>
            <div className="form-control mt-8">
          
          
          <input
                type="number"
                required
                className="input input-bordered"
                id="phone"
                name="phone_number"
                placeholder="Enter your phone number"
                onChange={(event) => {
                    handleChange(event)
                }}
                
              />
          
        </div>
        <div className="form-control mt-8">
          
         
          <input
                type="email"
                required
                className="input input-bordered"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(event) => {
                    handleChange(event)
                }}
                
              />
          
        </div>
            </>
            :
            ''

        }
        {
            count === 2?
            <div className="form-control mt-8">
          
          
          <input
                type="password"
                required
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
        :
        ''

        }
        {
            count === 2?
            <>
            <div className="flex flex-row-reverse justify-between mt-14">
            <button type='submit' className="py-2 font-xm drop-shadow-lg  flex items-center justify-center text-white rounded-xl w-1/2 mx-auto signup">Sign Up</button>
            <button onClick={()=> setCount(count - 1)}  className="py-2 font-xm drop-shadow-lg   text-white rounded-xl w-2/6  back">Back</button>
          </div>
          </>
          
        :
        <div className=" flex flex-row-reverse justify-between mt-14">
        <button onClick={()=> setCount(count + 1)} type='submit'  className="py-2  font-xm drop-shadow-lg  flex items-center justify-center text-white rounded-xl w-2/6  signup">Next Step <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>
        {
            count === 1?
            <button onClick={()=> setCount(count - 1)}  className="py-2 font-xm drop-shadow-lg   text-white rounded-xl w-2/6  back">Back</button>
            :
            ''
        }
        
      </div>

        }
        
        
        
        
      </form>
      <div className='text-center mb-4'>

            <h1 className='account'>Already have an account? <Link to='/login'><span className='text-color font-semibold'>LOGIN HERE!</span></Link></h1>
            </div>
    </div>
  </div>
</div>
    );
};

export default Signup;