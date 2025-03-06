import React from 'react';
import GameCard from './GameCard';

const HighestRatedGame = ({ gameData }) => {
    
    return (
        <div className='mb-12'>
            <h2 className=' text-2xl md:text-4xl font-semibold text-center my-12 md:my-24'>Highest Rated Game</h2>
            <div className='md:grid grid-cols-3 gap-4 w-11/12 md:w-2/3 mx-auto '>
                {gameData.map(singleData => <GameCard 
                key={singleData.id}
                singleData={singleData}
                />)}
            </div>
        </div>
    );
};

export default HighestRatedGame;