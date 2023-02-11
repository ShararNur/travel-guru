import React from 'react';
import Destinations from '../Destinations/Destinations';
import Header from '../Header/Header';
import './Home.css'
import bgImg from '../../resources/Image/Rectangle1.png'

const Home = () => {
    return (
        <div className="main">
            {/* <img src={bgImg} alt="" /> */}
            <div className="dark-overlay">
                <Destinations />
            </div>
        </div>
    );
};

export default Home;