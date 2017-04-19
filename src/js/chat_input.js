import React, { Component } from 'react';

export default class ChatInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      };
    }

  onKeyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }
    console.log('do we get here', this.props.messages)
    this.props.sendMessage({
      message: this.state.inputValue,
      from: 'You'
    });
    this.setState({
      inputValue: ''
    });
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const chatInputStyle = {
      padding: '20px',
      background: '#eee',
      border: '1px solid #ccc',
      borderBottom: '0'
    }

    const userInputStyle = {
      width: '100%',
      fontSize: '2rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '8px'
    }

    var boundOnChange = this.handleChange.bind(this);
    var boundOnKeyPress = this.onKeyPress.bind(this);

    return (
      <div style={chatInputStyle}>
        <input id="input" placeholder="Talk to me..." style={userInputStyle} type="text" value={this.state.inputValue} onChange={boundOnChange} onKeyPress={boundOnKeyPress}/>
      </div>
    )
  }
}