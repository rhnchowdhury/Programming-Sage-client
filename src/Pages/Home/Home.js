import React from 'react';
import Banner from '../../Shared/Banner';
import AddCourseShow from '../Courses/AddCourseShow';
import List from './List/List';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <List></List>
            <Stat></Stat>
            <AddCourseShow></AddCourseShow>
        </div>
    );
};

export default Home;