import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddCourse = () => {
    useTitle('Added')
    const { loading } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const name = form.name.value
        const img = form.img.value;
        const message = form.message.value;

        const added = {
            name, img, message, email
        };

        fetch('https://server-gilt-xi.vercel.app/add', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(added)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Course added successfully');
                    form.reset();
                }
            })
            .catch(err => console.log(err));
    }
    if (loading) {
        return <div className="radial-progress" style={{ "--value": 70 }}></div>
    }
    else {

    };

    return (
        <div className='m-12'>
            <h1 className='text-3xl font-bold text-center my-8 text-violet-700'>Add a Course</h1>
            <form onSubmit={handleAdd}>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-3  place-items-center' >
                    <input type="text" name='email' placeholder="Your email" defaultValue={user?.email} className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" name='name' placeholder="Course Title" className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" name='img' placeholder="Image URL" className="input input-bordered input-success w-full max-w-xs" />
                    <textarea name='message' className="textarea textarea-bordered textarea-success lg:h-3/12 lg:w-3/12" placeholder="Course Details"></textarea>
                    <button className="btn bg-violet-700">Added</button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;