import React from 'react';
import img1 from '../assets/swimming.png'
import img2 from '../assets/class.png'
import img3 from '../assets/playground.png'
import img4 from '../assets/bg.png'


const QZone = () => {
    return (
       <>
        <div className='p-6 mt-8 bg-gray-100'>
            <h1 className='font-semibold'>Q-Zone</h1>
            <img src={img1} alt="swimming" />
            <img src={img2} alt="class" />
            <img src={img3} alt="playground" />
        </div>

        <img className='mt-8' src={img4} alt="add" />
       
       </>
    );
};

export default QZone;