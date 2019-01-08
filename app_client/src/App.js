import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
//Components
import Card from './components/Card'
// import Navbar from './components/Navbar'
// import Jumbotron from './components/Jumbotron'


class App extends Component {
  // componentDidMount() {
  //   axios.get('/scrape')
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;