//import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
//import Grid from 'react-bootstrap/lib/Grid';
//import Row from 'react-bootstrap/lib/Row';
//import Navbar from 'react-bootstrap/lib/Navbar';
import Chat from './chat';

ReactDOM.render(<Chat />, document.getElementById('app'));

//const navbarInstance = (
//  <Navbar inverse>
//    <Navbar.Header>
//      <Navbar.Brand>
//        <a href="#">Babelbot</a>
//      </Navbar.Brand>
//      <Navbar.Toggle />
//    </Navbar.Header>
//  </Navbar>
//);

//var ChatMessage = React.createClass({
//  render: function() {
//    const baseMessageStyle = {
//      display: 'inline-block',
//      padding: '12px 20px',
//      borderRadius: '10px'
//    }
//
//    const botMessageStyle = {
//      background: '#49d22b',
//      color: 'white',
//      display: 'inline-block',
//      fontSize: '2rem',
//      padding: '12px 20px',
//      borderRadius: '10px',
//      textAlign: 'right'
//    }
//
//    const userMessageStyle = {
//      background: '#0FB0DF',
//      boxSizing: 'content-box',
//      color: 'white',
//      display: 'inline-block',
//      fontSize: '2rem',
//      padding: '12px 20px',
//      borderRadius: '10px',
//      textAlign: 'left',
//      width: 'auto',
//      WebkitBoxSizing: 'content-box',
//      MozBoxSizing: 'content-box'
//    }
//
//    var userStyle = ((this.props.message.from === 'bot') ? botMessageStyle : userMessageStyle)
//
//    var messageStyle = baseMessageStyle
//    messageStyle['textAlign'] = ((this.props.message.from === 'bot') ? 'right' : 'left')
//
//    return (
//      <div style={messageStyle}>
//        <div style={userStyle}>{this.props.message.message}</div>
//      </div>
//      );
//  }
//});

//var ChatHistory = React.createClass({
//  render: function() {
//    const style = {
//      flex: '1',
//      padding: '20px',
//      display: 'flex',
//      background: 'white',
//      flexDirection: 'column'
//    }
//
//    return (
//      <div style={style}>
//        {this.props.messages.map(function(message, i) {
//          return (
//            <ChatMessage key={i} message={message}></ChatMessage>
//          );
//        })}
//      </div>
//    )
//  }
//});

//var ChatMessageComposer = React.createClass({
//  getInitialState: function() {
//    return {
//      inputValue: ''
//    };
//  },
//
//  onKeyPress: function(event) {
//    if (event.key !== 'Enter') {
//      return;
//    }
//    console.log('do we get here', this.props.messages)
//    this.props.sendMessage({
//      message: this.state.inputValue,
//      from: 'you'
//    });
//    this.setState({
//      inputValue: ''
//    });
//  },
//
//  handleChange: function(event) {
//    this.setState({
//      inputValue: event.target.value
//    });
//  },
//
//  render: function() {
//    const chatInputStyle = {
//      padding: '20px',
//      background: '#eee',
//      border: '1px solid #ccc',
//      borderBottom: '0'
//    }
//
//    const userInputStyle = {
//      width: '100%',
//      fontSize: '2rem',
//      border: '1px solid #ccc',
//      borderRadius: '4px',
//      padding: '8px'
//    }
//
//    return (
//      <div style={chatInputStyle}>
//        <input id="input" placeholder="Talk to me..." style={userInputStyle} type="text" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
//      </div>
//    )
//  }
//});

//var Chat = React.createClass({
//  getInitialState: function() {
//    return {
//      status: 'Not paired',
//      user: Math.random(),
//      messages: [],
//      context: []
//    };
//  },
//  addMessage: function(message) {
//    this.setState(function(previousState) {
//      previousState.messages.push(message);
//      return {
//        messages: previousState.messages
//      };
//    });
//  },
//  receiveMessage: function(response) {
//    console.log(this.state);
//    console.log(response.botresponse.messageout.output.text);
//    console.log(response.botresponse.messageout.context);
//    this.setState(function(previousState) {
//      previousState.messages.push({
//        message: response.botresponse.messageout.output.text,
//        from: 'bot'
//      });
//      return {
//        messages: previousState.messages,
//        context: response.botresponse.messageout.context
//      };
//    });
//    document.getElementById('input').scrollIntoView();
//  },
//  sendMessage: function(message) {
//    console.log('Sending message ... ' + message.message)
//
//    var ajaxData = {};
//    ajaxData.msgdata = message.message;
//    ajaxData.user = this.state.user;
//
//    if (this.state.context) {
//      ajaxData.context = this.state.context;
//    }
//    console.log(ajaxData)
//
//    $.ajax({
//      type: 'POST',
//      url: 'http://babelfish2.eu-gb.mybluemix.net/botchat',
//      data: ajaxData,
//      success: this.receiveMessage,
//      error: processNotOK
//    });
//
//    this.addMessage(message)
//  },
//  render: function() {
//    const style = {
//      border: '1px solid #ccc'
//    }
//
//    return (
//      <div>
//        <h1>BabelBot</h1>
//        <div style={style}>
//          <ChatHistory messages={this.state.messages}></ChatHistory>
//          <ChatMessageComposer sendMessage={this.sendMessage}></ChatMessageComposer>
//        </div>
//      </div>
//    );
//  }
//});
//
//      function processNotOK() {
////        chat('Error', 'Error whilst attempting to talk to Bot');
//      }

//ReactDOM.render(
//  navbarInstance,
//  document.getElementById('navBar')
//);


