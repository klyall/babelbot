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

    const nameStyle = {
        fontSize: '0.6em'
    }

    console.log(typeof botMessageStyle)
    var messageStyle = baseMessageStyle
    messageStyle['textAlign'] = ((this.props.message.from === 'You') ? 'left' : 'right')

    var userStyle = ((this.props.message.from === 'You') ? userMessageStyle : botMessageStyle)

    if (this.props.message.from.includes('You')) {
        userStyle = userMessageStyle
    } else if (this.props.message.from.includes('Security')) {
        userStyle = Object.assign({}, botMessageStyle)
        userStyle['background'] = '#f44242'
    } else if (this.props.message.from.includes('Resilience')) {
        userStyle = Object.assign({}, botMessageStyle)
        userStyle['background'] = '#f4aa42'
    } else {
        userStyle = botMessageStyle
    }

    return (
      <div style={messageStyle}>
        <div style={userStyle}>
        {this.props.message.message}
        <div style={nameStyle}>{this.props.message.from}</div>
        </div>
      </div>
    );
  }
}
