import React from 'react';
import Ticket from './../images/image.jpg'
import { Link } from 'react-router';
const Home = () => {
    return (
        <>
            <div className='text-center'>
                <h2>Welcome to the Movie App</h2>
                <hr />
                <p>Discover and manage your favorite movies.</p>
                <Link to="/movies">
                <img src={Ticket} alt="Movie Ticket" />
                </Link>
            </div>
        </>
    );
}

export default Home;
