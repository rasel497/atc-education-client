import React, { useState } from 'react';

const Activies = ({ contents }) => {
    const [showPrevious, setShowPrevious] = useState(false);

    const handleNextClick = () => {
        setShowPrevious(true);
    };

    const handlePreviousClick = () => {
        setShowPrevious(false);
    };

    console.log('content', contents);
    return (
        <section className='flex justify-center'>
            <div className='mt-32 w-4/5'>
                <div className="card bg-base-100 grid lg:grid-cols-2 sm:grid-cols-1 shadow-2xl">
                    <figure><img src='https://demo.themexpert.com/wordpress/edumodo-update/learnpress-v2/wp-content/uploads/sites/6/2022/07/img-7.jpg' alt="Album" /></figure>
                    <div className="card-body w-4/3">
                        <h2 className="text-2xl font-extrabold uppercase">ABC EDUCATION ONLINE TRAINING</h2>
                        <p className='mt-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eos ullam incidunt aliquam voluptatibus ipsam odio nobis quia nostrum. Sit!</p>
                        <div className="card-actions justify-start">
                            <div className="flex justify-center mt-4">
                                {showPrevious && (
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-2 rounded"
                                        onClick={handlePreviousClick}
                                    >
                                        Previous
                                    </button>
                                )}
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                                    onClick={handleNextClick}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activies;