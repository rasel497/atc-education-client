import React from 'react';

const BannerHero = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/fXDDvWY/Online-Education-Program.png' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-4xl text-white font-semibold uppercase">WELCOME TO</h1>
                        <h2 className='text-xl text-yellow-400 font-semibold mt-4 uppercase'>Asian Center for Transforming Education</h2>
                        <p className="text-sm py-6 text-white">Inspiring educational quotes have long been a staple of the teaching profession.
                            <br />Look at Aristotle’s famous declaration that ‘education is the best provision for old age <br /> or modern-day educator Ron Clark’s in hibernation Asian Center for Transforming Education.</p>
                        <button className="btn bg-purple-700 hover:bg-purple-600 text-white">Get Explore Us</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerHero;