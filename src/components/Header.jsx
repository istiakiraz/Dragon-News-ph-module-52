import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <>
            <div className='flex flex-col items-center w-10/12 mx-auto gap-5 justify-center pt-12'>
                <img src={logo} alt="" />
                <p className='text-[18px] text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <div className=' -mt-2 text-xl inline-flex gap-1.5 '>
                <p className='text-[#403F3F]'>{format(new Date(), ' EEEE,' ) }</p>
                <p className='text-[#706F6F]'>{format(new Date(), ' LLLL MM, yyyy ' ) }</p>
                </div>
            </div>
        </>
    );
};

export default Header;
