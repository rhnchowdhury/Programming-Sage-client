import React from 'react';

const ReviewsShow = ({ review }) => {
    const { _id, student, url, message } = review;

    const handleDelete = id => {
        const proceed = window.confirm('You want to cancel this order?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews?email=${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={url} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{student}</div>
            </td>
            <td>{message}</td>
        </tr>
    );
};

export default ReviewsShow;