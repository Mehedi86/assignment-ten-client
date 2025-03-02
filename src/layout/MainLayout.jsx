import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-64px)]'>

            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;