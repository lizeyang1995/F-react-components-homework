import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: '',
    };
  }

  handleInputMessage = (event) => {
    this.setState({
      inputMessage: event.target.value,
    });
  };

  sendMessage = () => {
    this.props.getInputMessage(this.state.inputMessage);
    this.setState({
      inputMessage: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputMessage} onChange={this.handleInputMessage} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
