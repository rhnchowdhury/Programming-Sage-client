import React, { useEffect, useState } from 'react';
import CourseShow from './CourseShow';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coursesAll')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <h2>ttt: {courses.length}</h2>
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