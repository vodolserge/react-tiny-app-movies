import React from "react";

/**
 * Component for searching.
 *
 * @constructor
 */
class Search extends React.Component{
    RADIO_TYPE = {
        all: 'all',
        series: 'series',
        movie: 'movie',
    };

    state = {
        search: '',
        searchType: this.RADIO_TYPE.all,
    }


    handleFilter = (e) => {
        this.setState({
            searchType: e.target.value
        }, () => this.props.searchMovies(this.state.search, this.state.searchType));
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.searchType);
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
                            onClick={() => this.props.searchMovies(this.state.search, this.state.searchType)}
                    >
                        <i className="material-icons left">search</i>Search
                    </button>

                    <div className="search-btns">
                        <label>
                            <input className="with-gap"
                                   name="type-search"
                                   type="radio"
                                   value={this.RADIO_TYPE.all}
                                   checked={this.state.searchType === this.RADIO_TYPE.all}
                                   onChange={this.handleFilter}
                            />
                            <span className="search-type">All</span>
                        </label>
                        <label>
                            <input className="with-gap"
                                   name="type-search"
                                   type="radio"
                                   value={this.RADIO_TYPE.movie}
                                   checked={this.state.searchType === this.RADIO_TYPE.movie}
                                   onChange={this.handleFilter}
                            />
                            <span className="search-type">Movies</span>
                        </label>
                        <label>
                            <input className="with-gap"
                                   name="type-search"
                                   type="radio"
                                   value={this.RADIO_TYPE.series}
                                   checked={this.state.searchType === this.RADIO_TYPE.series}
                                   onChange={this.handleFilter}
                            />
                            <span className="search-type">Series</span>
                        </label>
                    </div>
                </div>
        );
    }
}

export default Search;