import React from 'react';

const FreqQuestion = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-4/5 mt-32 bg-purple-400 p-5 rounded-lg'>
                <h2 className='text-4xl text-center text-white font-extrabold mb-10'>Frequently Ask Questions?</h2>
                <div className="card grid lg:grid-cols-2 md:grid-cols-1 card-side bg-base-100 shadow-xl">
                    <div>
                        <figure><img src="https://innovationatwork.ieee.org/wp-content/uploads/2019/03/bigstock-204807592-1024x683.jpg" alt="Movie" /></figure>
                    </div>
                    <div className="m-4">
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <h1 className='text-lg'>Click to open this one and close others</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Why need proffessional Education trainning?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <h1 className='text-lg'>Click to open this one and close others</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Why need proffessional Education trainning?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <h1 className='text-lg'>Click to open this one and close others</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Why need proffessional Education trainning?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <h1 className='text-lg'>Click to open this one and close others</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Why need proffessional Education trainning?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <h1 className='text-lg'>Click to open this one and close others</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Why need proffessional Education trainning?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreqQuestion;