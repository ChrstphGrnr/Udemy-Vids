import React from 'react'
import VideoComponent from './VideoComponent'

const VideoList = ({ videos }) => {
    // props.videos is the array of all videos
    const renderedList = videos.map((video) => {
        return <VideoComponent video={video}/>
    })

    return (
        <div>
           {renderedList}
            </div>
    )
}

export default VideoList