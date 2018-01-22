import React, { Component } from 'react';
import logo from './birdy.png';
import './App.css';
import PostCreationContainer from './components/PostCreationContainer';
import ChirpContainer from './components/ChirpContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chirper</h1>
        </header>
        <PostCreationContainer />
        <ChirpContainer input="1" />
        <ChirpContainer input="2" />
        <ChirpContainer input="3" />
      </div>
    );
  }
}

export default App;
