import React from 'react';
import { IoCheckboxOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center'>
        <div className=" bg-base-100 w-full max-w-xl shrink-0 ">
      <div className="px-12  py-5 ">
      <h1 className="text-2xl text-[#403F3F] text-center py-8 border-b-1 border-gray-300 font-bold">Register your account</h1>
        <form className="fieldset  mx-auto lg:w-9/12 mt-5 ">
        <label className="label text-sm  font-bold">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name" />
          <label className="label text-sm  font-bold">Photo URL</label>
          <input type="text" className="input" placeholder="Enter your Photo URL" />
          
          <label className="label text-sm  font-bold ">Email address</label>
          <input type="email" className="input" placeholder="Enter your email address" />
          <label className="label text-sm  font-bold">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover flex items-center gap-1 "> <IoCheckboxOutline size={20} /> Accept Term & Conditions</a></div>
          <button className="btn bg-[#403F3F] text-white mt-4">Register</button>
        </form>
        <p className='text-xs text-center'>Already Have An Account ? <Link to='/auth/login'><span className='text-red-400 font-semibold'>Log In</span></Link></p>
        
      </div>
    </div>
    </div>
    );
};

export default Register;