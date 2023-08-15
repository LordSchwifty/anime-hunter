import React from 'react'
import './Movie.css'

const Movie = ({ title, rating, image }) => {
    return (
        <div className='movie-card'>
            <img src={image} alt={title}></img>
            <p className='movie-title'>{title}</p>
            <p className='movie-rating'>{rating}</p>
        </div>
    )
}

export default Movie;