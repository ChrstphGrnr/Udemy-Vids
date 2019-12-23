import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state = {
        videos: [], 
        selectedVideo: null
    }

    componentDidMount(){
        this.onTermSubmit('expensive cars')
    }


    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[Math.floor(Math.random()*response.data.items.length)]
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    
    render() {
       return (
            <div style={{paddingTop: '10px'}} className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            )
    }
}

export default App