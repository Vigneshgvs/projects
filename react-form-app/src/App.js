import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateVarA : 5,
      stateVarB : "apple",
      stateVarC : {
        name: "Vignesh",
        age: 28,
        email: ""
      }
    }
  }

  handleNoIf = b => {
    //"" '' ``
    console.log("a: this.state.stateA");
    console.log(`
    State Variable stateVarA: ${this.state.stateVarA}
    `);
    console.log(`
    State Variable stateVarB: ${this.state.stateVarB}
    `);
    console.log('hey i am single quote, in JS there is no difference between using double or single quotes.');
    console.log("hey i am double quote, but in linux - double quotes interpret special characters like var. so if single no extra process is taken before printing.");

    //b.

    this.setState({
      stateVarB: "green"
     })

    // *************** No If statement ***************
    //2>1 && (this.setState.stateVarB = "orange");    not a setter
    2>1 && (this.setState({                           //setter of state
      stateVarB: "orange"
     }));

    console.log(`
    State Variable stateVarB: ${this.state.stateVarB}
    `);
    //wont be reflected on first click of button
    //https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b
    

  }

  render() {
  return (
    <div className="App">
      hello world

      <button onClick={this.handleNoIf}>Test No if</button>
    </div>
  );
  }
}

export default App;
