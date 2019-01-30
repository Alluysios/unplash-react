import React from 'react';

class SearchBar extends React.Component {
    state = {term: '' };

    onFormSubmit = e => {
        e.preventDefault();

        
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui container">
               <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
        {/* by putting () on onInputChange you automatically call the function during render/rerender */}
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(e) => this.setState({term: e.target.value})} 
                        />
                </div>
                </form> 
            </div>
        )
    }
}

export default SearchBar;