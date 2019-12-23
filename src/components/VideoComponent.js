import React from 'react'




const VideoComponent = ({video}) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            {video.snippet.title}
        </div>
    )
}

// same as above 
// destructured syntax for video object inside props
// const VideoComponent = (props) => {
//     return <div>{props.video.snippet.title}</div>
// }

export default VideoComponent
