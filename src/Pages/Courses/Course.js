import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import CourseShow from './CourseShow';

const Course = () => {
    const { loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    useTitle('Courses')

    useEffect(() => {
        fetch('http://localhost:5000/coursesAll')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    if (loading) {
        return <div className="radial-progress" style={{ "--value": 70 }}></div>
    }

    return (
        <div className='m-16'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    courses.map(course => <CourseShow key={course._id}
                        course={course}
                    ></CourseShow>)
                }
            </div>
        </div>
    );
};

export default Course;