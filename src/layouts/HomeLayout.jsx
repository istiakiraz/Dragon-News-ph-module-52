import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <>
        <header>
            <Header></Header>
            <section className='md:w-10/12 w-11/12 mx-auto my-5'>
                <LatestNews></LatestNews>
            </section>
        </header>
        <main>
            <section className='left_nav'></section>
            <section className='main'>
                <Outlet></Outlet>
            </section>
            <section className='right_nav'></section>
        </main>
            
        </>
    );
};

export default HomeLayout;