import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const CourseShow = ({ course }) => {
    const { _id, title, image, price, details } = course;

    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <figure>
                    <PhotoView src={image}>
                        <img src={image} alt="Shoes" className='w-full h-56' />
                    </PhotoView>
                </figure>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-violet-700">{title}</h2>
                <p>{details.slice(0, 100) + "..."}</p>
                <p><strong className='text-violet-700'>Subscription fee:</strong> <span className='font-bold text-orange-400'>${price}</span></p>

                <div className="card-actions justify-end">
                    <Link to={`/courses/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseShow;