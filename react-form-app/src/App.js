import React, { Component } from 'react';
import './App.css';
import StateExpl from './components/StateExpl';
import MyNameIsDifferent from './components/Greet';   //any name here, as it is default export
import { Greet2 } from './components/Greet2'; // must match with one in that file. as it is named export
import HelloJsx from './components/HelloJsx';
import Welcome from './components/Welcome';

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
      <MyNameIsDifferent/>
      <Greet2/>
      <Welcome/>
      <HelloJsx/>
    </div>
  );
  }
}

export default App;
