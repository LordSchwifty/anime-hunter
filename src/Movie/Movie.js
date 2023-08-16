import React from 'react'
import './Movie.css'

const Movie = ({ title, rating, image, year, id }) => {
    return (
        <div className='movie-card'>
            <img src={image} alt={title}></img>
            <p className='movie-title'>{title}</p>
            <p className='movie-rating'>{`Score: ${rating}`}</p>
            <p className='year'>{year}</p>
        </div>
    )
}

export default Movie