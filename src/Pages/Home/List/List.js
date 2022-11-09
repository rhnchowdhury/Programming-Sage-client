import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListShow from './ListShow';

const List = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setLists(data))
    }, []);

    return (
        <div>
            <h2>Services: {lists.length}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {


                    lists.map(list => <ListShow key={list._id}
                        list={list}></ListShow>)

                }
            </div>
            <div className='place-items-center'>

                <Link to='/courses'><button className="btn btn-error ">View All Courses</button></Link>
            </div>
        </div>
    );
};

export default List;