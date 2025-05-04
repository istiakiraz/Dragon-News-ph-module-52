import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        
    <div className='flex justify-center items-center'>
        <div className="  bg-base-100 w-full max-w-sm shrink-0 ">
      <div className=" px-12 py-5 ">
      <h1 className="text-2xl text-[#403F3F] text-center py-8 border-b-1 border-gray-300 font-bold">Login your account</h1>
        <form className="fieldset mt-5">
        <label className="label text-sm  font-bold ">Email address</label>
          <input type="email" className="input" placeholder="Enter your email address" />
          <label className="label text-sm  font-bold">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-[#403F3F] text-white mt-4">Login</button>
        </form>
        <p className='text-xs text-center'>Dont’t Have An Account ? <Link to='/auth/register'><span className=' font-semibold text-red-400'>Register</span></Link></p>
      </div>
    </div>
    </div>

    );
};

export default Login;