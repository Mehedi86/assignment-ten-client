import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full rounded overflow-hidden md:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full bg-[url(/banner-1.jpg)] bg-cover bg-no-repeat">
                <div className='flex justify-center items-center w-full text-white'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl font-bold'>Discover Honest Reviews</h2>
                        <p className='font-semibold'>Read genuine player reviews to make informed decisions before playing a game.</p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-[url(/banner-2.jpg)] bg-cover bg-no-repeat">
                <div className='flex justify-center items-center w-full text-white'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl font-bold'>Share Your Experience</h2>
                        <p className='font-semibold'>Write reviews and help others by sharing insights about the games you've played.</p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-[url(/banner-3.jpg)] bg-cover bg-no-repeat">
                <div className='flex justify-center items-center w-full'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl font-bold'>Find Top-Rated Games</h2>
                        <p className='font-semibold'>Explore the best-rated games based on real player feedback and community votes.</p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;