import './Search.css'
import React from 'react'

const Search = () => {
    return (
       <div className='search-section'>
        <form className='search-bar'>
            <input className='search-field'
              type='text'
              placeholder='Search Anime'
              name='title'
              value='title'
              />
            <button>SUBMIT</button>
        </form>
       </div> 
    )
}

export default Search;