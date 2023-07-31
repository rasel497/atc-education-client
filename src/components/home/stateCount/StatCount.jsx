import React from 'react';
import GoalCard from './GoalCard';

const StatCount = () => {
    return (
        <>
            <section className='mb-10 mt-32'>
                <GoalCard />
                <div className='py-5 bg-gradient-to-r from-orange-500 to-secondary'>
                    <div className='text-center p-5'>
                        <h1 className='text-white text-5xl font-extrabold mb-5'>International Leader In Assessments</h1>
                        <p className='text-white'>We provide cutting-edge international assessments, scientifically designed to inform school <br /> leaders, teachers and students with data that helps to improve learning outcomes.</p>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-1  '>
                        <div className="stat place-items-center">
                            <div className="stat-value text-white">40.2K+</div>
                            <div className="stat-title font-semibold text-gray-700">Training</div>
                        </div>
                        <div className="stat place-items-center text-white">
                            <div className="stat-value">91.5K+</div>
                            <div className="stat-title font-semibold text-gray-700">Reach</div>
                        </div>
                        <div className="stat place-items-center text-white">
                            <div className="stat-value">10.5K+</div>
                            <div className="stat-title font-semibold text-gray-700">Partners</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value text-white">16.7K+</div>
                            <div className="stat-title font-semibold text-gray-700">Country</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StatCount;