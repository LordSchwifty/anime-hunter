import React from 'react'
import './Top.css'
import Movie from '../Movie/Movie'

const Top = ({ movies }) => {
    
    const movieData = movies.map((movie, index) => {
        return <Movie key={`all${index}`} title={movie.title} image={movie.images.jpg.image_url} rating={movie.score} year={movie.year} />
    })

    return (
        <div className='movie-section'>
           {movieData}
        </div>
    )
}

export default Top;