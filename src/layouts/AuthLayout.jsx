import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-[linear-gradient(135deg,_rgba(59,130,246,0.7),_rgba(139,92,246,0.7))] min-h-screen'>
            <header className='lg:w-10/12 w-11/12 mx-auto py-10'>
                <Navbar></Navbar>
            </header>
            <main className='lg:w-10/12  w-11/12 mx-auto py-5' >
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;