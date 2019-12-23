import React from 'react'
import VideoComponent from './VideoComponent'

const VideoList = ({ videos, onVideoSelect }) => {
    // props.videos is the array of all videos
    // props.onVideoSelect is the callback function to App.js
    const renderedList = videos.map((video) => {
        return (
            <VideoComponent 
                key={video.id.videoId}
                video={video} 
                onVideoSelect={onVideoSelect}
            />
        )
    })

    return (
        <div className='ui relaxed divided list'>
           {renderedList}
            </div>
    )
}

export default VideoList