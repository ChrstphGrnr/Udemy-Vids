import React from 'react'
import './VideoComponent.css'




const VideoComponent = ({video, onVideoSelect}) => {
    return (
        <div onClick={ ()=> {onVideoSelect(video)}}className='video-component item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className='content'>
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            
        </div>
    )
}

// same as above 
// destructured syntax for video object inside props
// const VideoComponent = (props) => {
//     return <div>{props.video.snippet.title}</div>
// }

export default VideoComponent
