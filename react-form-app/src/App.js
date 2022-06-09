import React, { Component } from 'react';
import './App.css';
import StateExpl from './components/StateExpl';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  

  render() {
  return (
    <div className="App">
      hello world
      <StateExpl />
      
    </div>
  );
  }
}

export default App;
