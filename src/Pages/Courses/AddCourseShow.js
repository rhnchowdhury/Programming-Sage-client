import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AddCourseShow = () => {
    const { user } = useContext(AuthContext);
    const [adds, setAdds] = useState([]);

    useEffect(() => {
        fetch(`https://server-gilt-xi.vercel.app/add?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAdds(data))
    }, [user?.email]);

    return (
        <div className='my-4 lg:m-20'>
            {
                adds.map(ad => <div key={ad._id}>
                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                        <figure >
                            <img src={ad.img} alt="" className="w-full h-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{ad.name}</h2>
                            <p>{ad.message}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AddCourseShow;