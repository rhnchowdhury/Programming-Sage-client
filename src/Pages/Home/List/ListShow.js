import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const ListShow = ({ list }) => {
    const { title, image, price, details } = list;

    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full h-56' /></figure>
            <div className="card-body">
                <h2 className="card-title text-violet-700">{title}</h2>
                <p>{details.slice(0, 100) + "...."}</p>
                <p><strong className='text-violet-700'>Subscription fee:</strong> <span className='font-bold text-orange-400'>${price}</span></p>
                <div className="card-actions justify-end">
                    <HiArrowNarrowRight className='text-violet-700'></HiArrowNarrowRight>
                </div>
            </div>
        </div>
    );
};

export default ListShow;