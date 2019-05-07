import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './components/courses';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {
  constructor() {
    super();
}
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Header/>
        {Course.listClicked ?
         <Course/> : null
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
