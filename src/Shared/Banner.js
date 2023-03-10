import React from 'react';
import slider1 from '../Slider/slider1.webp';
import slider2 from '../Slider/slider2.webp';
import slider3 from '../Slider/slider3.jpg';
const Banner = () => {

    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full" style={{ height: '500px' }} >
                <img src={slider1} alt='' className="w-full rounded-md" style={{ filter: 'brightness(45%)' }} />
                <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2">
                    <h1 className='text-xl lg:text-6xl font-bold text-white' style={{ marginLeft: '40%' }}>
                        Skill your self for <span className='lg:ml-14'>your success</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-purple-700 mr-3">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-purple-700">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full" style={{ height: '500px' }}>
                <img src={slider2} alt='' className="w-full rounded-md" style={{ filter: 'brightness(45%)' }} />
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-purple-700 mr-3">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-purple-700">❯</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2">
                    <h1 className='text-xl lg:text-6xl font-bold text-white' style={{ marginLeft: '40%' }}>
                        Skill your self for <span className='lg:ml-14'>your success</span>
                    </h1>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full" style={{ height: '500px' }}>
                <img src={slider3} alt='' className="w-full rounded-md" style={{ filter: 'brightness(45%)' }} />
                <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2">
                    <h1 className='text-xl lg:text-6xl font-bold text-white' style={{ marginLeft: '40%' }}>
                        Skill your self for <span className='lg:ml-14'>your success</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-purple-700 mr-3">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-purple-700">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;