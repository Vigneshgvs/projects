import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageText: "Form is InComplete"
    };
  }

  //onChange(newValue) {      wrong sytax - leads to - Uncaught TypeError: this.setState is not a function
  onChange = (newValue) => {
       this.setState(
        { messageText: newValue },
        () => {
          console.log(` callback 
          State Variable messageText: ${this.state.messageText}
          `);
        }
        );      
  }

  render() {
        return (<div>
            <Form messageText = { this.state.messageText } onValueChange={this.onChange}></Form>
            <Message messageText = { this.state.messageText } />  
        </div>);
  }
}

export default App;