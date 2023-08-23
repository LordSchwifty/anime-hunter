import './App.css';
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Top from '../Top/Top'
import { getTopMovies } from '../APICalls'
import { searchMovies } from '../APICalls'
import { useState, useEffect } from 'react';



  const App = () => {
  const [ topAnime, setTopAnime] = useState([])
  const [ searchAnime, setSearchAnime] = useState([])
  
  useEffect(() => {
    getTopMovies()
    .then(data => {
      setTopAnime(data.data)
    })
  }, [])
  

  const searchAnimeMovies = (searchValue) => {
    searchMovies(searchValue)
    .then(data => {
      console.log(data)
      setSearchAnime(data.data)
    })
  }

    return (
     < div className="App">
      <Navbar />
      <Search searchAnimeMovies={searchAnimeMovies}/>
      <Top movies={searchAnime.length ? searchAnime : topAnime}/>
     </div>
    )
  }


export default App;
