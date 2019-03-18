import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}
export default App;
