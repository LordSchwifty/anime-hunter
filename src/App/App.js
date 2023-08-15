import './App.css';
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Top from '../Top/Top'
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      topAnime: []
    }
  }
  render(){
    return (
     < div className="App">
      <Navbar />
      <Search />
     </div>
    )
  }
}

export default App;
