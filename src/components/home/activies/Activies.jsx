import React from 'react';

const Activies = () => {
    return (
        <section className='flex justify-center'>
            <div className='mt-32 w-4/5'>
                <div className="card bg-base-100 grid lg:grid-cols-2 sm:grid-cols-1 shadow-2xl">
                    <figure><img src="https://demo.themexpert.com/wordpress/edumodo-update/learnpress-v2/wp-content/uploads/sites/6/2022/07/img-7.jpg" alt="Album" /></figure>
                    <div className="card-body w-4/3">
                        <h2 className="text-2xl font-extrabold uppercase">ACT Education Online Training</h2>
                        <p className='mt-4'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus doloribus tempore minima id aperiam esse voluptate delectus harum culpa.</p>
                        <div className="card-actions justify-start">
                            <button className="btn text-white bg-purple-700 hover:bg-purple-600">EXPLORE Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activies;