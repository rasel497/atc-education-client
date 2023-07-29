import React from 'react';
import Meeting from '../meeting/Meeting';
import Tranning from '../tranning/Tranning';
import Footer from '../../shared/footer/Footer';
import Contact from '../../shared/contact/Contact';
import BannerHero from '../bannerHero/BannerHero';
import StatCount from '../stateCount/StatCount';
import FreqQuestion from '../frqQuestion/FreqQuestion';
import Partners from '../partners/Partners';
import Explore from '../explore/Explore';


const Home = () => {
    return (
        <>
            <BannerHero />
            <Meeting />
            <Explore />
            <StatCount />
            <FreqQuestion />
            <Tranning />
            <Contact />
            <Partners />
            <Footer />
        </>
    );
};

export default Home;