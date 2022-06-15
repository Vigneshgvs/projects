import React, { Component } from 'react'
import PropsChild from './PropsChild'

class PropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         age: 40
      }

      this.greetParent = this.greetParent.bind(this)
      this.greetWChildAge = this.greetWChildAge.bind(this)
      this.changeM = this.changeM.bind(this)
    }


    greetParent() {
       alert (`Hello Parent, your age ${this.state.age}`)   //as 'this' used in js method, need to bind it
    }

    greetWChildAge(childAge) {
        alert (`Hello Parent, your age ${this.state.age} with child of age ${childAge}`)
    }
    changeMyAge = (num) => {   //arrow, so no bind
        this.setState({
            age: num
        })
    }
    changeM(num) {
        this.setState({
            age: num
        })
    }

  render() {
    return (
      <div>
        <h1>Hello {this.state.age}</h1>
        <PropsChild methodAlias = {this.greetParent} methodParamAlias = {this.greetWChildAge} parentAge={this.state.age} changeParentAge={this.changeMyAge} changeM={this.changeM}/>
        {/** no parenthesis () for  changeMyAge or changeM */}
      </div>
    )
  }
}

export default PropsParent