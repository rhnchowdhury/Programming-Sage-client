import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Update = () => {
    const { user } = useContext(AuthContext);
    useTitle('Updates');

    const handleReview = event => {
        event.preventDefault();
        alert('Updated successfully.')
    };

    return (
        <div className='m-12'>
            <h1 className='text-3xl font-bold text-center my-8 text-violet-700'>Update Your review</h1>
            <form>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='first' type="text" placeholder="First Name" className="input input-bordered w-fulls" />
                    <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='url' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" required />
                </div>
                <textarea className="textarea textarea-bordered h-24 w-full my-4" name='message' placeholder="Your message"></textarea>
                <div className='card-actions justify-center'>
                    <input onClick={handleReview} className='btn bg-violet-700' type="submit" value="Updated" />
                </div>
            </form>
        </div>
    );
};

export default Update;