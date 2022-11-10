import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
            message
        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" className='w-full h-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <p>{price}</p>
                </div>
            </div>

            <div>
                <h1>Review Section</h1>
                <Review></Review>
                <h2>Others review</h2>
                <form onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='first' type="text" placeholder="First Name" className="input input-bordered w-fulls" />
                        <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                        <input name='url' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                        <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" required />
                    </div>
                    <textarea className="textarea textarea-bordered h-24 w-full" name='message' placeholder="Your message"></textarea>
                    <p>Please <Link className='text-violet-600 font-bold' to='/login'>login </Link> to add a review</p>
                    <input className='btn' type="submit" value="Add my review" />

                </form>
            </div>
        </div>
    );
};

export default CourseDetails;