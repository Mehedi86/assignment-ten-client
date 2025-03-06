import React from 'react';

const UpcomingGames = () => {
    return (
        <div className="container mx-auto bg-neutral-300 my-12">
            <h2 className="text-center text-2xl md:text-4xl font-semibold py-6">Upcoming Games</h2>
            <div className='md:grid grid-cols-3 gap-4 p-4'>
                <div className="card bg-base-100 shadow-sm my-2 md:my-0">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/W8ftz76/Wanderstop.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Title: Wanderstop</h2>
                        <p className="font-semibold">Genre: Adventure, Life Simulation</p>
                        <p className="font-semibold">Rating: TBD</p>
                        <p className="font-semibold">Release_Date: March 11, 2025</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm my-2 md: md:my-0">
                    <figure>
                        <img className='w-full '
                            src="https://i.ibb.co.com/tThBqHV8/Records.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Lost Records: Bloom & Rage</h2>
                        <p className="font-semibold">Genre: Adventure, Narrative</p>
                        <p className="font-semibold">Genre: Adventure, Narrative</p>
                        <p className="font-semibold">Release_Date: April 15, 2025</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm my-2 md: md:my-0">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/Xrr9s4WX/Eriksholm.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Title: Eriksholm: The Stolen Dream</h2>
                        <p className="font-semibold">Genre: Adventure, Stealth</p>
                        <p className="font-semibold">Rating: TBD</p>
                        <p className="font-semibold">Release_Date: 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingGames;