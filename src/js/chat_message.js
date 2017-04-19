import React, { Component } from 'react';

export default class ChatMessage extends Component {
  render() {
    const baseMessageStyle = {
      display: 'inline-block',
      padding: '12px 20px',
      borderRadius: '10px'
    }

    const botMessageStyle = {
      background: '#49d22b',
      color: 'white',
      display: 'inline-block',
      fontSize: '2rem',
      padding: '12px 20px',
      borderRadius: '10px',
      textAlign: 'right'
    }

    const userMessageStyle = {
      background: '#0FB0DF',
      boxSizing: 'content-box',
      color: 'white',
      display: 'inline-block',
      fontSize: '2rem',
      padding: '12px 20px',
      borderRadius: '10px',
      textAlign: 'left',
      width: 'auto',
      WebkitBoxSizing: 'content-box',
      MozBoxSizing: 'content-box'
    }

    var userStyle = ((this.props.message.from === 'bot') ? botMessageStyle : userMessageStyle)

    var messageStyle = baseMessageStyle
    messageStyle['textAlign'] = ((this.props.message.from === 'bot') ? 'right' : 'left')

    return (
      <div style={messageStyle}>
        <div style={userStyle}>{this.props.message.message}</div>
      </div>
    );
  }
}
