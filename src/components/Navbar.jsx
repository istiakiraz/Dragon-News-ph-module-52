import React, { use } from 'react';
import userImg from "../assets/user.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user} = use(AuthContext)

    return (
        <>
            <section className='flex justify-between items-center mt-8'>
                <div>
                    {user && user.email}
                </div>

                <div className='flex gap-2 md:gap-5 md:-mr-36 items-center text-[#706F6F]'>

                <NavLink className={({ isActive }) => (isActive ? "  " : " text-red-500")}  to='/'>Home</NavLink>
                <NavLink  to='/about'>About</NavLink>
                <NavLink  to='/career'>Career</NavLink>

                </div>
                <div className='flex items-center gap-2 '>
                    <img src={userImg} alt="user_img" />
                    <Link to='/auth/login' className='btn px-8 rounded-none text-white bg-[#403F3F]'>Log In</Link>
                </div>
            </section>
        </>
    );
};

export default Navbar;