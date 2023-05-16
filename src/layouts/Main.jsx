import React from "react";
import {apiUrl, defaultSearchNeedle as DEFAULT_SEARCH} from "../helpers/static";
import MoviesList from "../components/MoviesList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

/**
 *   `Main` component.
 *
 * @constructor
 */
class Main extends React.Component {
    state = {
        movies: [],
        responseError: '',
        loading: false,
    };

    componentDidMount() {
        this.searchMovies(DEFAULT_SEARCH);
    }

    searchMovies = (search, type = 'all') => {
        if (!search) search = DEFAULT_SEARCH;

        (async () => {
            this.setState({loading: true})
            try {
                const data = await this.fetchData(`${apiUrl}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`);
                this.setState({movies: data['Search']})
            } catch (err) {
                this.setState({responseError: err})
            }

            this.setState({loading: false})
        })();
    }

    render () {
        const {movies, loading } = this.state;
        let content = loading ? <Preloader/> : (<MoviesList movies={movies}/>);

        if (this.state.responseError) {
            content = <p>Sorry! We cannot find any movie!</p>
        }


        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {content}
        </main>;
    }

    async fetchData(url) {
        return await fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not OK");
                }

                return res.json()
            });
    }
 }

export default Main;