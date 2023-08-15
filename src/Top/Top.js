import React from 'react'
import './Top.css'
import Movie from '../Movie/Movie'

const Top = ({ movies }) => {

    return (
        <div className='movie-section'>
           {movies}
        </div>
    )
}

export default Top;