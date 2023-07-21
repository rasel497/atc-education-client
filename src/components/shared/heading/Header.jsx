import React, { useState } from 'react';
import Head from './Head';
import './header.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    const [click, setClick] = useState(false);
    return (
        <>
            <Head />
            <header>
                <nav className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB"}
                        onClick={() => setClick(false)}
                    >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/meeting">Meeting</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">ACTIVITY</div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa  fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;