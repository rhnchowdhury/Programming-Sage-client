import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from '../../Shared/Banner';
import AddCourseShow from '../Courses/AddCourseShow';
import List from './List/List';
import Stat from './Stat';

const Home = () => {
    useTitle('Home');
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