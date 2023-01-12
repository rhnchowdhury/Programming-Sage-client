import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListShow from './ListShow';

const List = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('https://server-gilt-xi.vercel.app/courses')
            .then(res => res.json())
            .then(data => setLists(data))
    }, []);

    return (
        <div className='mt-5 lg:m-14'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    lists.map(list => <ListShow key={list._id}
                        list={list}></ListShow>)
                }
            </div>
            <div className='card-actions justify-center my-12'>
                <Link to='/courses'><button className="btn bg-purple-700 text-white">View All Courses</button></Link>
            </div>
        </div>
    );
};

export default List;