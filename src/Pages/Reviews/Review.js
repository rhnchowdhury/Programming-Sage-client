import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            <h1>this is review page{reviews.length}</h1>
        </div>
    );
};

export default Review;