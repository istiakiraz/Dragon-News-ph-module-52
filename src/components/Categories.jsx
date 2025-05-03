import React, { use } from 'react';
const categoryPromise = fetch('/categories.json').then(res=> res.json())

const Categories = () => {
    const category = use(categoryPromise)
    console.log(category);
    return (
        <>
            <h3 className=' font-semibold'>All Category({category.length})</h3>
        </>
    );
};

export default Categories;