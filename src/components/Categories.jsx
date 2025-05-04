import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res=> res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    
    return (
        <>
            <h3 className=' text-sm lg:text-[16px] font-semibold'>All Category({categories.length})</h3>
            <div className='grid grid-cols-1 mt-5 gap-2'>
                {
                   categories.map((category) => <NavLink key={category.id} className={({ isActive }) => (isActive ? " btn bg-gray-200 rounded-none " : "btn text-gray-500 hover:bg-gray-200 bg-white rounded-none border-none")} to={`/category/${category.id}`} >
                    {category.name}
                   </NavLink>) 
                }
            </div>
        </>
    );
};

export default Categories;