import React from 'react';

const Meeting = () => {
    return (
        <>
            <section className='flex justify-center'>
                <div className='mt-16 w-4/5'>
                    <h2 className='flex justify-center text-3xl font-extrabold mb-16 uppercase'>Join our upcoming events</h2>
                    <div className='grid justify-items-center gap-2 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-5'>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="facebook.com">Join Meeting</a>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="facebook.com">Join Meeting</a>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-sky-600 to-info text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title  text-white">Events Title</h2>
                                <p className=' text-white'>Events description. We are using cookies for no reason.</p>
                                <a className='underline text-amber-400 hover:text-lime-400' href="facebook.com">Join Meeting</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Meeting;