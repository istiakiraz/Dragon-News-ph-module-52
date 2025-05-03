import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayouts/LeftAside';
import RightAside from '../components/homelayouts/RightAside';

const HomeLayout = () => {
    return (
        <>
        <header >
            <Header></Header>
            <section className='md:w-10/12 w-11/12 mx-auto my-5'>
                <LatestNews></LatestNews>
            </section>
            <nav className='md:w-10/12 w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </nav>
        </header>
        <main className='md:w-10/12 w-11/12 items-center mx-auto my-10 grid grid-cols-12 '>
            <aside className='col-span-3'>
                <LeftAside>

                </LeftAside>
            </aside>
            <section className='main col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
            <RightAside></RightAside>
            </aside>
        </main>
            
        </>
    );
};

export default HomeLayout;