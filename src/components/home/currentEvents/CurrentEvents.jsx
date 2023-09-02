import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CurrentEvents = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    // className='grid justify-items-center gap-2 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-5'
    return (
        <section >
            <div className='mt-16 mx-12 '>
                <h2 className='flex justify-center text-3xl text-center font-extrabold mb-16 uppercase'>Join our upcoming events</h2>
                <div>
                    <Carousel responsive={responsive} >
                        <div className="  card bg-gradient-to-r from-sky-600 to-info text-primary-content mr-4">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className='text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="https://forms.gle/2dtm555MSrCvPWgC8" target='_blank' rel="noreferrer">Register Event</a>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content  mr-4">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="https://forms.gle/2dtm555MSrCvPWgC8" target='_blank' rel="noreferrer">Register Event</a>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content  mr-4">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="https://forms.gle/2dtm555MSrCvPWgC8" target='_blank' rel="noreferrer">Register Event</a>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content  mr-4">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="https://forms.gle/2dtm555MSrCvPWgC8" target='_blank' rel="noreferrer">Register Event</a>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content mr-4">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="https://forms.gle/2dtm555MSrCvPWgC8" target='_blank' rel="noreferrer">Register Event</a>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content mr-4">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="https://forms.gle/2dtm555MSrCvPWgC8" target='_blank' rel="noreferrer">Register Event</a>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default CurrentEvents;


