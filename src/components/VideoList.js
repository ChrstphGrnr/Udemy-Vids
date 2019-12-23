import React from 'react'
import VideoComponent from './VideoComponent'

const VideoList = ({ videos, onVideoSelect }) => {
    // props.videos is the array of all videos
    const renderedList = videos.map((video) => {
        return (
            <VideoComponent 
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