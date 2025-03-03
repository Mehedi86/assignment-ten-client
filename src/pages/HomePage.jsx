import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import HighestRatedGame from '../components/HighestRatedGame';

const HomePage = () => {
    const gameData = useLoaderData();
    
    return (
        <div>
            <Banner/>
            <HighestRatedGame gameData={gameData}/>
        </div>
    );
};

export default HomePage;