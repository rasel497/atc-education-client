import React from 'react';

const GoalCard = () => {
    return (
        <>
            <div className='flex lg:grid-cols-4 sm:grid-cols-none overflow-hidden'>
                <div className='w-1/4 h-48 bg-red-500 p-5 hover:bg-red-700'>
                    <h1 className='text-white text-xl font-bold'>Title of Mission/Vission/Success</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fugit!</p>
                </div>
                <div className='w-1/4  h-48 bg-slate-500 p-5 hover:bg-red-400'>
                    <h1 className='text-white text-xl font-bold'>Title of Mission/Vission/Success</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fugit!</p>
                </div>
                <div className='w-1/4  h-48 bg-red-500 p-5 hover:bg-orange-500'>
                    <h1 className='text-white text-xl font-bold'>Title of Mission/Vission/Success</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fugit!</p>
                </div>
                <div className='w-1/4  h-48 bg-orange-400 p-5 hover:bg-yellow-600'>
                    <h1 className='text-white text-xl font-bold'>Title of Mission/Vission/Success</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fugit!</p>
                </div>
            </div>
        </>
    );
};

export default GoalCard;