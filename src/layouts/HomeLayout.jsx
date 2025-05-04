import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayouts/LeftAside';
import RightAside from '../components/homelayouts/RightAside';

const HomeLayout = () => {

    const data = useLoaderData()
    

    return (
        <>
        <header >
            <Header></Header>
            <section className='md:w-10/12 w-11/12 mx-auto my-5'>
                <LatestNews data={data} ></LatestNews>
            </section>
            <nav className='md:w-10/12 w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </nav>
        </header>
        <main className='md:w-10/12  w-11/12 mx-auto mt-28   grid grid-cols-8 lg:grid-cols-12 '>
            <aside className='lg:col-span-3 col-span-2 h-fit top-8 sticky  lg:mx-20'>
                <LeftAside></LeftAside>
            </aside>
            <section className='main col-span-6 lg:col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='lg:col-span-3 col-span-10 h-fit top-8 sticky   mx-20'>
            <RightAside></RightAside>
            </aside>
        </main>
            
        </>
    );
};

export default HomeLayout;