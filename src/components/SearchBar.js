import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        this.setState({term: e.target.value})
    }

    onSearchSubmit = (e) => {
        console.log(this.state.term)
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form'>
                    <div className='field' >
                        <label>Video Search</label>
                        <input 
                            onChange={this.onSearchChange}
                            value={this.state.term} 
                            type="text"
                            onSubmit={this.onSearchSubmit}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar