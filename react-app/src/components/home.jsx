import React from 'react';
import Ticket from './../images/image.jpg'
const Home = () => {
    return (
        <>
            <div className='text-center'>
                <h2>Welcome to the Movie App</h2>
                <hr />
                <p>Discover and manage your favorite movies.</p>
                <img src={Ticket} alt="Movie Ticket" />
                
            </div>
        </>
    );
}

export default Home;
