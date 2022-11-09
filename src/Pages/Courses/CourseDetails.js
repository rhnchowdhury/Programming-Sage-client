import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { title, image, price, details } = useLoaderData();
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default CourseDetails;