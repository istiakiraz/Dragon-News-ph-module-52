import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const FindUs = () => {
    return (
        <div className='mt-16'>
            <h1 className='font-semibold'>Find Us On</h1>
            <ul className='mt-8 *:border *:border-gray-200 '>
                <li className='p-4 ' ><a className='flex gap-2 items-center text-gray-600 ' target="_blank" href="https://facebook.com"> <span><FaFacebook color='blue' /></span> Facebook </a>  </li>
                <li className='p-4 ' ><a className='flex gap-2 items-center text-gray-600 ' target="_blank" href="https://x.com"> <span><IoLogoTwitter color='skyblue' /></span> Twitter </a> </li>
                <li className='p-4 ' ><a className='flex gap-2 items-center text-gray-600 ' target="_blank" href="https://instagram.com"> <span><FaInstagram color='pink' /></span> Instagram</a>  </li>
            </ul>
        </div>
    );
};

export default FindUs;