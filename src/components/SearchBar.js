import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        this.setState({term: e.target.value})
    }

    onSearchSubmit = (e) => {
        e.preventDefault();

        // TODO: Make sure to call callback from 
        // parent component
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onSearchSubmit} className='ui form'>
                    <div className='field' >
                        <label>Video Search</label>
                        <input 
                            onChange={this.onSearchChange}
                            value={this.state.term} 
                            type="text"
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar

