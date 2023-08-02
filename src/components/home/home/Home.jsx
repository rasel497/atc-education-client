import React from 'react';
import Tranning from '../tranning/Tranning';
import Footer from '../../shared/footer/Footer';
import Contact from '../../shared/contact/Contact';
import StatCount from '../stateCount/StatCount';
import Partners from '../partners/Partners';
import Slider from '../dynaminxx/Slider';
import PreviousEvent from '../previousEvent/PreviousEvent';
import CurrentEvents from '../currentEvents/CurrentEvents';
import Activies from '../activies/Activies';


const Home = () => {
    return (
        <>
            <Slider />
            <CurrentEvents />
            <Activies />
            <StatCount />
            <PreviousEvent />
            <Tranning />
            <Contact />
            <Partners />
            <Footer />
        </>
    );
};

export default Home;