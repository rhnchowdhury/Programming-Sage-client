import React from 'react';
import code1 from '../../images/code1.jpg'

const Stat = () => {
    return (
        <div className=''>
            <div className="hero  bg-slate-900 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={code1} className=" max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='ml-8'>
                        <h1 className="text-4xl font-bold text-white">Preparing for your success <br /> trusted programming services.</h1>
                        <p className="py-6 text-white">It's been a nearly strategic thought leader for five I am bring unrivaled <br /> decades incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div >
            <div className='m-24 bg-sky-500 p-24 '>
                {/* <div className=' space-x-4 flex flex-col lg:flex-rows'> */}
                <div className=' space-x-4 grid grid-cols-1 lg:grid-cols-4'>
                    <div className='font-black text-2xl text-white'>
                        <h1><span className='ml-16'>820+</span><br />Active Student</h1>
                    </div>
                    <div className='font-black text-2xl text-white'>
                        <h1><span className='ml-16'>500+</span><br />Courses Done</h1>
                    </div>
                    <div className='font-black text-xl text-white'>
                        <h1><span className='ml-14'>100+</span><br />Upcoming Student</h1>
                    </div>
                    <div className='font-black text-2xl text-white'>
                        <h1><span className='ml-16'>50K</span><br />Total Student</h1>
                    </div>
                </div >
            </div >

        </div >
    );
};

export default Stat;