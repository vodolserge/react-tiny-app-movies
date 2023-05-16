import React from "react";
import {apiUrl} from "../helpers/static";
import MoviesList from "../components/MoviesList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

/**
 *   `Main` component.
 *
 * @constructor
 */
class Main extends React.Component {
    DEFAULT_MOVIE = 'Matrix';

    state = {
        movies: [],
        responseError: '',
    };

    componentDidMount() {
        this.searchMovies(this.DEFAULT_MOVIE);
    }

    searchMovies = (search) => {
        this.setState({responseError: ''});

        (async () => {
            try {
                const data = await this.fetchData(`${apiUrl}&s=${search}`);
                if (data.hasOwnProperty('Response') && 'False' === data.Response) {
                    this.setState({responseError: 'Cannot find any movie!'});
                }

                this.setState({movies: data['Search']})
            } catch (err) {
                console.log("Aga!",err);
                this.setState({responseError: err})
            }
        })();
    }

    render () {
        const {movies} = this.state ;
        let content = movies && movies.length ? (<MoviesList movies={movies}/>) : <Preloader/>;

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