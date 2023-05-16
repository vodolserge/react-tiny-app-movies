import React from "react";
import MoviesList from "../components/MoviesList";
import Preloader from "../components/Preloader";

/**
 *   `Main` component.
 *
 * @constructor
 */
class Main extends React.Component {
    state = {
        movies: []
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apiKey=abdd4018&s=matrix')
            .then((response) => response.json())
            .then((data ) => this.setState({movies: data['Search']}) )
    }

    render () {
        const {movies} = this.state;

        return <main className="container content">
            {
                movies.length ? (<MoviesList movies={movies}/>) : <Preloader/>
            }
        </main>;
    }
 }

export default Main;