import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description",
            },
            {
                id: 2,
                title: "Raiders of the Lost Ark",
                release_date: "1981-06-12",
                runtime: 115,
                mpaa_rating: "PG-13",
                description: "Some long description",
            },
        ];
        setMovies(moviesList);
    }, []);

    return (
        <div className='text-center'>
            <h2>Movies List</h2>
            <hr />
            <p>Here you can find all your favorite movies.</p>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Runtime</th>
                        <th>MPAA Rating</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </td>
                            <td>{movie.release_date}</td>
                            <td>{movie.runtime}</td>
                            <td>{movie.mpaa_rating}</td>
                            <td>{movie.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Movies;
