import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Review from '../Reviews/Review';

const CourseDetails = () => {
    const { _id, title, image, price, details } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`;
        const email = user?.email || 'unregistered';
        const url = form.url.value;
        const message = form.message.value;


        const review = {
            course: _id,
            courseName: title,
            price,
            student: name,
            email,
            url,
            message,
        };

        if (user?.email) {
            fetch('https://server-gilt-xi.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('review successfully')
                        form.reset();
                    }
                })
                .catch(err => console.error(err))
        }
        else {
            return alert('Please login to add a review');

        }
    }

    return (
        <div className='mt-5 lg:m-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" className='w-full h-56' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-violet-700">{title}</h2>
                        <p>{details}</p>
                        <p><strong className='text-violet-700'>Subscription fee:</strong> <span className='font-bold text-orange-400'>${price}</span></p>
                    </div>
                </div>
                <div>
                    <h1 className='text-violet-700 font-bold text-4xl m-8 card-actions justify-center'>Others Review</h1>
                    <Review></Review>
                    <h1 className='text-violet-700 font-bold text-4xl m-8 card-actions justify-center'>Add Your Review</h1>

                    <form onSubmit={handleReview}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name='first' type="text" placeholder="First Name" className="input input-bordered w-fulls" />
                            <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                            <input name='url' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" />
                        </div>
                        <textarea className="textarea textarea-bordered h-24 w-full mt-2" name='message' placeholder="Your message"></textarea>
                        <input className='btn  bg-violet-700 my-4' type="submit" value="Add review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;