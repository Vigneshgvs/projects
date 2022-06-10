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

    render() {
        return (<div>
            <Form messageText = { this.state.messageText } ></Form>
            <Message messageText = { this.state.messageText } />  
        </div>);
    }
}

export default App;