import './App.css';
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
      <Top />
     </div>
    )
  }
}

export default App;
