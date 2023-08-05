import React from 'react';

const Head = () => {
    return (
        <section className='head bg-purple-600'>
            <div className='container flexSB'>
                <div className="logo">
                    <h1>ABC EDUCATION</h1>
                    <span>Research Center For Education's</span>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/theacteducation" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f icon'></i></a>
                    <a href="https://www.linkedin.com/company/asian-centre-for-transforming-education/" target="_blank" rel="noopener noreferrer"> <i className='fab fa-linkedin icon'></i></a>
                    <a href="https://www.youtube.com/@ACTEDMedia" target="_blank" rel="noopener noreferrer"><i className='fab fa-youtube icon'></i></a>
                    <a href="https://www.facebook.com/theacteducation" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>
                </div>
            </div>
        </section>
    );
};

export default Head;
