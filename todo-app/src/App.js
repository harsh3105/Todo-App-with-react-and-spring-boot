import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter/> */}
       <TodoApp/>
      </div>
    );
  }
}

class LearningExamples extends Component{
  render() {
    return (
      <div className="App">
        Hello harsh
        <FirstComponent/>
        <SecondComponent/>
      </div>
    );
  }
}
export default App;