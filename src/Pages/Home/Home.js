import React from 'react';
import Banner from '../../Shared/Banner';
import List from './List/List';
import Stat from './Stat';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <List></List>
            <Stat></Stat>
        </div>
    );
};

export default Home;