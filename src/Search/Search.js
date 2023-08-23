import './Search.css'
import React, { useState } from 'react'

const Search = ({ searchAnimeMovies }) => {
  const [searchValue, setSearchValue] = useState('')
  
  
    return (
       <div className='search-section'>
        <form className='search-bar'>
            <input className='search-field'
              type='text'
              placeholder='Search Anime'
              name='title'
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              />
            <button className='submit-btn' onClick={(event) => {
              event.preventDefault()
              searchAnimeMovies(searchValue)}}>SUBMIT</button>
        </form>
       </div> 
    )
}

export default Search;