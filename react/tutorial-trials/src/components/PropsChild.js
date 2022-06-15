import React, { Component } from 'react'

//class component
class PropsChild extends Component {
                                // props is not passed anywhere - if it is class component.
                                //if functional, have to pass

  render() {
    return (
      <div> 
        {/** 1. calling parent methods */}
        <button onClick={this.props.methodAlias}>Click to call parent method</button> <br/>
        {/** 2. calling parent method with param ---------------- solution: use Arrow function */}
        <button onClick={ () => this.props.methodParamAlias(5)}>Click to call parent method with param</button> <br/>
        {/** 
         * functional way: onClick={ () => props.methodParamAlias(5)} */}

         {/** <button onClick={this.props.methodParamAlias(5)}>  
          * simply with param -- wont work - actually automatically gets called</button> */}

          {/** 3. calling parent state variables */}
          <h1>{this.props.parentAge}</h1>
          <h1>`Happy ${this.props.parentAge}`</h1>

           {/** 4. changing/updating parent state variables */}
           {/** use a separate method to update parent state var, call that method from child*/}
           {/** a. arrow func */}
           <button onClick={() => this.props.changeParentAge(45)}>change parent state variable via method</button> <br/>

           {/** <button onClick={this.props.changeParentAge(45)}>change parent state variable via method</button> <br/>
            * - wont work, as when ever ( ) u use on method calls, use arrow function........*/}

            {/** b. non-arrow func */}
            <button onClick={() => this.props.changeM(50)}>change parent state variable via method</button> <br/>
          

      </div>
    )
  }
}


//if it is functional component:
//refer form-validation - Message.js
// const Message = (props) => {
//     return (
//         <div>
//             <h3 className="text-center message">
//                 {/* 
//                 {this.props.messageText}        This is class way of accessing props
//                 */}
//                 {props.messageText}
//             </h3>
//         </div>
//     )
// }
// or
// function Message (props) {
//     return (
//         <div>
//             <h3 className="text-center message">
//                 {props.messageText}
//             </h3>
//         </div>
//     )
// }

export default PropsChild