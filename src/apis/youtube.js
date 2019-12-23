import axios from 'axios'
const KEY = 'AIzaSyCN6JlNjZAtpQ23Ve9pdjD3_eupNeLYxCY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5, 
        key: KEY
    }
})