import './App.css';
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Top from '../Top/Top'
import React, { Component } from 'react'
import getTopMovies from '../APICalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      topAnime: []
    }
  }

  componentDidMount(){
    getTopMovies()
    .then(data => {
      this.setState({ topAnime: data.data })
      console.log(data)
    })
  }
  render(){
    return (
     < div className="App">
      <Navbar />
      <Search />
      <Top movies={this.state.topAnime}/>
     </div>
    )
  }
}

export default App;
