import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayerT = ({ video }) => {

    return (
        <div className="mt-4">
            <ReactPlayer
                className=" "
                url={video.url}
                controls
                width="505px"
            />
            <h2 className="text-xl text-white px-2 font-semibold mb-4 bg-blue-700 p-2">{video.title}</h2>
        </div>
    );
};

export default VideoPlayerT;