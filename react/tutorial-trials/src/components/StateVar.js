import React, { Component } from 'react'

class StateVar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first: "apple"
      }
      this.changeSecond = this.changeSecond.bind(this)
    }

    changeFirst () {        //if 'this' in ---js method or event handler
        this.setState({
            first: "orange"
        })
    }

    changeSecond () {       //if 'this' in ---js method or event handler
        this.setState({
            first: "lemon"
        })
    }

    changeThird = () => {           //if 'this' in ---js method or event handler
        this.setState({
            first: "melon"
        })
    }

  render() {
    return (
      <div>
        Hey it is, {this.state.first} <br/>
        <button onClick={this.changeFirst}>Click -this.changeSecond - wont work</button>        {/*if 'this' in ---js method or event handler*/}
        
         {/* this will not work, as 'this' keyword is undefined in event handler in javascript. 
                        if 'this' in ---js method or event handler
         4 ways:
        1.  so have to bind 'this' with event handler ------ onClick={this.method.bind(this) [note: func def is in non-arrow func]
2. arrow function in caller area------  onClick = {() => this.method()} --------why parenthesis here?--- is it coz of, if arrow function, can have ( ). [note: func def is in non-arrow func]
3. binding in class constructor ---- this.method = this.method.bind(this) and in caller onClick={this.method}. [note: func def is in non-arrow func]
3rd is better than second, as it takes place in constructor
4. arrow function in func def itself ------ function (of event handler) definition write with arrow function, and in caller onClick={this.method}..... cool..........*/} <br/>
        <button onClick={this.changeFirst.bind(this)}>1. Click bind(this)</button> <br/>
        <button onClick={() => this.changeFirst()}>2. Click arrow func onclick w paranthesis</button> <br/>   {/** not called automatically */}
        <button onClick={() => this.changeFirst}>Click arrow func onclick w/o paranthesis - wont work</button> <br/>
        <button onClick={this.changeSecond}>3. Click binding in class constructor - this.changeSecond</button> <br/>
        <button onClick={this.changeThird}>Click arrow fun in func def -this.changeThird- </button> <br/>
        {/*<button onClick={this.changeThird()}>Click arrow fun in func def -w paranthesis - wont work n gets stuck</button> <br/>
        in above automatically gets called and infinite times
        */}
      </div>
    )
  }
}

export default StateVar