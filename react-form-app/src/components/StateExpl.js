import React, { Component } from 'react'
//shortcut: rce

class StateExpl extends Component {

  //shortcut: rconst
  constructor(props) {
    super(props)
  
    this.state = {
        value : 0,
        a:0,
        stateVarA : 5,
        stateVarB : "apple",
        stateVarC : {
          name: "Vignesh",
          age: 28,
          email: "vig@gmail.com"
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

    //--------this line is even an error. have to use setState()
    //this.state.stateVarB = "lemon";
    
    // setState accepts an object - {}
    this.setState({
      stateVarB: "lemon"
     })

    // *************** No IF statement structure ***************
    //2>1 && (this.setState.stateVarB = "orange");    not a setter
    2>1 && (this.setState({                           //setter of state
      stateVarB: "orange"
     }));
    //--------------output is orange, after 2nd click
    console.log(`
    State Variable stateVarB: ${this.state.stateVarB}
    `);
    //wont be reflected on first click of button
    //https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b
    //setState is asynchronous
    //we cant see the new values in state right after we updated it

    
    this.setState({ value: this.state.value + 1});
    this.setState({ value: this.state.value + 1});
    this.setState({ value: this.state.value + 1});
    //--------------output will be 1 only.
    console.log(`
    State Variable value: ${this.state.value}
    `);

    //to get it 3 (aka) to update it
    this.setState((prevState) => ({ value: prevState.value + 1}));
    this.setState((prevState) => ({ value: prevState.value + 1}));
    this.setState((prevState) => ({ value: prevState.value + 1}));
    //--------------output is 4
    console.log(`
    State Variable value: ${this.state.value}
    `);

    2>1 && (this.setState((prevState) => {                          
      prevState.stateVarB = "grapes";
     }));     
    //--------------all logs were grapes, after 2nd click
    console.log(`
    State Variable stateVarB: ${this.state.stateVarB}
    `);

    this.setState((prevState) => ({                          
      stateVarB: "pineapple"
     }));
     //--------------all logs were grapes, after 2nd click
    console.log(`
    State Variable stateVarB: ${this.state.stateVarB}
    `);
    // log statements  are called before it is being updated
    //so normal log lines will be always in previous value - to make it log synced value, enter it in callback function

    // setState accepts 2 parameters: a state object - {} and a callback function - an arrow function () => {}
    this.setState(
      {                          
      stateVarB: "avacado"
      },
      () => {
        console.log(` callback 
        State Variable stateVarB: ${this.state.stateVarB}
        `);
      }
      );
     //--------------all logs were grapes, after 2nd click
    console.log(`
    State Variable stateVarB: ${this.state.stateVarB}
    `);

   // react groups multiple setState calls into single - for better performance
   //so if called increament() method 5 times - in place for +5, then final output will be just +1 
   // so when ever u need to update based on previous state, u have to pass function - ()=>({}) as an argument to setState(); 
   // instead of object - {}
   //()=>({}) ; parameters=>body ; parameters can be 2: (prevState, props)
   // -----------setState (object, callback) has disadvantage, so we will use setState(function, callback)-----------
      //code in increment method


    //changing a single item in json object
    //check whether there exists other items in same json object after that change
    //expl: https://learn.co/lessons/react-updating-state
    // this.setState(
    //     {
    //         stateVarC: {
    //             age: 20,
    //         },
    //     },
    //     () => {
    //         console.log(` callback 
    //             stateVarC name:${this.state.stateVarC.name} age:${this.state.stateVarC.age} email:${this.state.stateVarC.email}
    //         `);
    //     }
    // )
    //output: stateVarC name:undefined age:20 email:undefined
    //above lines will definitely remove name/email from stateVarC.
    //to retain other items of it: 1. Object.assign() 
    //Object.assign(target, ...sources)
    // this.setState(
    //     {
    //         stateVarC: Object.assign(
    //             {

    //             },
    //             this.state.stateVarC,
    //             {
    //                 age: 20,
    //             }
    //         ),
    //     },
    //     () => {
    //         console.log(`  callback 
    //             stateVarC name:${this.state.stateVarC.name} age:${this.state.stateVarC.age} email:${this.state.stateVarC.email}
    //         `);
    //     }
    // )
    //output: stateVarC name:Vignesh age:20 email:vig@gmail.com
    //or 2. spread operator in JS (...)
    this.setState(
        {
            stateVarC: {
                ...this.state.stateVarC,
                age: 20,
            },
        },
        () => {
            console.log(`  callback 
                stateVarC name:${this.state.stateVarC.name} age:${this.state.stateVarC.age} email:${this.state.stateVarC.email}
            `);
        }
    )
    //output: stateVarC name:Vignesh age:20 email:vig@gmail.com
    //below is a tester log, not callback log.
    //after all tester logs get printed, only later callback logs will print........ both in their respective sequence
    console.log(`
    stateVarC name:${this.state.stateVarC.name} age:${this.state.stateVarC.age} email:${this.state.stateVarC.email}
    `);
  }

  increment() {

    // this.setState(
    //   {
    //     a: this.state.a + 1
    //   }, 
    //   () => {
    //     console.log('increment value: ', this.state.a);
    //   }
    // )
    // the above will make incrementFive() to final output as always 1, coz multiple setState methods are grouped
    
    // so use "function" instead of object;  with function parameter prevState 
    this.setState( 
      (prevState) => ({
        a : prevState.a +1
      }),
      // {
      //   a: this.state.a + 1
      // }, 
      () => {
        console.log('increment value: ', this.state.a);
      }
    )

    //with 2 parameters as an example
    // this.setState( 
    //     (prevState, props) => ({
    //       a : prevState.a +1
    //     }),
    //     // {
    //     //   a: this.state.a + 1
    //     // }, 
    //     () => {
    //       console.log('increment value: ', this.state.a);
    //     }
    //   )

    // if going to use props, then have to use componentWillReceiveProps method, so when ever parent component updates values of the props being sent from it, new values will be always in sync with code in this component. (medium notes)
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  //setState --------------------------------------------------------------------------------------------------
  // 0. is asynchronous
  // 1. always make use of setState and never modify the state directly
  // 2. code has to be executed after the state has been updated? Please that code in the call back function which is the second argument to the setState method
  // 3. when you have to update state based on the previous state value, pass in a function as the 1st argument instead of the regular object
  // 4. props gonna use, then componentWillReceiveProps method have to be used.

  // instead of 3rd point can use componentDidMount
//   componentDidMount() {
//     setInterval(this.inc, 1000);
//   }

//--------------

  //onClick={() => this.handleNoIf()}
  //or
  //onClick={this.handleNoIf}
  // either above is correct
  
  //onClick={this.incrementFive()}
  //but if written as above way, it gets called infinite times
  //and
  //onClick={this.incrementFive} - will give error as it is having this.increment() inside it, so need () while calling
  //

  //only 1 big div
  render() {
    return (
      <div>
        StateExpl file
        <br/>
        <div>The value is: {this.state.value}</div>
        <br/>
        <div>The value is: {this.state.stateVarB}</div>
        <br/>
        <button onClick={this.handleNoIf}>Test No if</button> <br/>
        <button onClick={() => this.incrementFive()}>Test 5 increments</button>
      </div>
    )
  }
}

export default StateExpl