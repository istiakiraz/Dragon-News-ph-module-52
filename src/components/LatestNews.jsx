import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center py-3 px-3 gap-3 bg-[#F3F3F3]' >
            <p className='px-4 py-2 bg-[#D72050] text-white'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} >
            <p className='font-semibold text-[#403F3F]' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quis possimus nam esse magnam quaerat ducimus culpa.</p>
            <p className='font-semibold text-[#403F3F]' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quis possimus nam esse magnam quaerat ducimus culpa.</p>
            
            </Marquee>
            
        </div>
    );
};

export default LatestNews;