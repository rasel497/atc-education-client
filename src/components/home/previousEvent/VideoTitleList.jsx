import React from 'react';

const VideoTitleList = ({ videos, onSelectVideo }) => {
    return (
        <div className="w-3/1 bg-gray-200">
            <h2 className="text-xl font-semibold mb-4 bg-blue-800 text-white px-2">Our Previous Event</h2>
            <ul>
                {videos.map((video) => (
                    <li
                        key={video.id}
                        className="cursor-pointer hover:text-white hover:bg-green-500 mb-2 px-2 rounded-sm"
                        onClick={() => onSelectVideo(video)}
                    >
                        {video.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoTitleList;