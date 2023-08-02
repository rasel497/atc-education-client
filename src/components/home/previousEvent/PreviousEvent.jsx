import React from 'react';

const PreviousEvent = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-4/5 mt-32 bg-slate-400 p-5 rounded-lg'>
                <h2 className='text-4xl text-center text-white font-extrabold mb-10'>Our Previous Events</h2>
                <div className="card grid lg:grid-cols-2 md:grid-cols-1 card-side bg-base-100 shadow-xl">
                    <div>
                        <figure><img src="https://img.freepik.com/free-photo/business-advisor-giving-his-opinion_1098-671.jpg?w=996&t=st=1690878307~exp=1690878907~hmac=70be232d4a8eab46cda3a5d1e62b576b1ad20ff8963b2c9b9205efcff418e314" alt="Movie" /></figure>
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

export default PreviousEvent;
