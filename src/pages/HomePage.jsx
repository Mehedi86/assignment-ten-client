import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner';
import { useLoaderData, useNavigate } from 'react-router-dom';
import HighestRatedGame from '../components/HighestRatedGame';
import { AuthContext } from '../providers/AuthProvider';

const HomePage = () => {
    const gameData = useLoaderData();
    const { navigateLocation, setNavigateLocation, user, loadUserForList, setLoadUserForList } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (navigateLocation == '/myReviews/undefined') {
            navigate(`/myReviews/${user?.email}`);
            setNavigateLocation(null)
        }

    }, [navigateLocation, user?.email, navigate, setNavigateLocation])

    useEffect(() => {
        if (loadUserForList == '/gameWatchList/undefined') {
            navigate(`/gameWatchList/${user?.email}`);
            setLoadUserForList(null)

        }
    }, [loadUserForList, setLoadUserForList, user?.email, navigate])

    return (
        <div>
            <Banner />
            <HighestRatedGame gameData={gameData} />
        </div>
    );
};

export default HomePage;