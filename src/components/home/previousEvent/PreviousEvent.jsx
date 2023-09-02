import React from 'react';
import { useState } from 'react';
import videoData from './videoData.js';
import VideoTitleList from './VideoTitleList.jsx';
import VideoPlayerT from './VideoPlayerT.jsx';

const PreviousEvent = () => {
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };
    return (
        <section className='flex justify-center'>
            <div className='3/4 mt-12 bg-blue-800 rounded-lg'>
                <h2 className='text-3xl text-center text-white font-extrabold p-2'>Our Previous Events</h2>
                <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 card-side shadow-xl rounded-md p-12  bg-gray-300">
                    <div>
                        <VideoPlayerT video={selectedVideo} />
                    </div>
                    <div className="w-full mt-4">
                        <VideoTitleList videos={videoData} onSelectVideo={handleVideoSelect} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreviousEvent;
