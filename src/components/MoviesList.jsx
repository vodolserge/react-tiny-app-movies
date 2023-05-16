import Movie from './Movie'

/**
 * MoviesList component.
 *
 * @constructor
 */
function MoviesList (props) {
    const {movies} = props;

    return <div className="movies">
            {
                movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)
            }
        </div>;
}

export default MoviesList;