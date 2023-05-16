import React from "react";

/**
 * Component for searching.
 *
 * @constructor
 */
class Search extends React.Component{
    state = {
        search: '',
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render () {
        return (
                <div className="input-field">
                    <input id="email_inline"
                           type="search"
                           className="validate"
                           placeholder="search"
                           value={this.state.search}
                           onChange={
                               (e) => {
                                   this.setState({
                                       search: e.target.value
                                   })
                               }
                           }
                          onKeyDown={this.handleKey}
                    />
                    <button className="waves-effect waves-light btn search-btn"
                            onClick={() => this.props.searchMovies(this.state.search)}>
                        <i className="material-icons left">search</i>Search
                    </button>
                </div>
        );
    }
}

export default Search;