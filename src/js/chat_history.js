import React, { Component } from 'react';
import ChatMessage from './chat_message';

export default class ChatHistory extends Component {
  render() {
    const style = {
      flex: '1',
      padding: '20px',
      display: 'flex',
      background: 'white',
      flexDirection: 'column'
    }

    return (
      <div style={style}>
        {this.props.messages.map(function(message, i) {
          return (
            <ChatMessage key={i} message={message}></ChatMessage>
          );
        })}
      </div>
    )
  }
}