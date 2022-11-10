import React from 'react';

const ReviewsShow = ({ review }) => {
    const { student, url, message } = review;

    return (
        <tr>
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