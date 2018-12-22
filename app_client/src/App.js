import React, { Component } from 'react';
import './App.css';
import axios from "axios";
//Components
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Gallery from "./components/Gallery"

class App extends Component {
  componentDidMount() {
    axios.get('/scrape')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Jumbotron />
          <Card />
          {/* <Gallery /> */}
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<Gallery imageUrls={urls} />, document.getElementById("mount"));

export default App;
