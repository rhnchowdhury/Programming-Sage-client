import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";

const ReviewsShow = ({ review, handleDelete }) => {
    const { _id, student, url, message } = review;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><HiOutlineTrash className=' w-6 h-6'></HiOutlineTrash></button>
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
            <td>
                <button className="btn btn-ghost btn-xs">details</button>
            </td>
        </tr>
    );
};

export default ReviewsShow;