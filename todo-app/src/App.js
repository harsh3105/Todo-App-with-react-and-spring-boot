import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world
        <FirstComponent/>
        <SecondComponent/>
      </div>
    );
  }
}
export default App;