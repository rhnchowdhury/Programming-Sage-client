import React from 'react';
import { Link } from 'react-router-dom';

const CourseShow = ({ course }) => {
    const { _id, title, image, price, details } = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseShow;