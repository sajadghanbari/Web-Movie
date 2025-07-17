import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }
        fetch(`http://localhost:8080/movies`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch(err => {
                console.log(err);
            })
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
