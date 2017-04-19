import React, { Component } from 'react';
import ChatInput from './chat_input';
import ChatHistory from './chat_history';
import $ from 'jquery';
import Navbar from 'react-bootstrap/lib/Navbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
          status: 'Not paired',
          user: Math.random(),
          messages: [],
          context: []
      };
    }

  addMessage(message) {
    this.setState(function(previousState) {
      previousState.messages.push(message);
      return {
        messages: previousState.messages
      };
    });
  }

  receiveMessage(response) {
    console.log(this.state);
    console.log("Response received ... " );
    console.log(response);
    console.log(response.botresponse.messageout.context);

    var msg = response.botresponse.messageout.output.text[0]
    console.log(msg);

    var name = 'Ally Architect'

    if (msg.includes('According to RBS standards')) {
        name = 'Security Stan'
    } else if (msg.includes('How many users')) {
        name = 'Resilience Roz'    }
     else if (msg.includes('When will this application be in use')) {
        name = 'Resilience Roz'
    }

    this.setState(function(previousState) {
      previousState.messages.push({
        message: response.botresponse.messageout.output.text,
        from: name
      });
      return {
        messages: previousState.messages,
        context: response.botresponse.messageout.context
      };
    });
    document.getElementById('input').scrollIntoView();
  }

  sendMessage(message) {
    console.log('Sending message ... ' + message.message)

    var ajaxData = {};
    ajaxData.msgdata = message.message;
    ajaxData.user = this.state.user;

    if (this.state.context) {
      ajaxData.context = this.state.context;
    }
    console.log(ajaxData)

    var boundReceiveMessage = this.receiveMessage.bind(this);

    $.ajax({
      type: 'POST',
      url: 'http://babelfish2.eu-gb.mybluemix.net/botchat',
      data: ajaxData,
      success: boundReceiveMessage,
      error: this.processNotOK
    });

    var boundAddMessage = this.addMessage.bind(this);
    boundAddMessage(message)
  }

   processNotOK() {
  //        chat('Error', 'Error whilst attempting to talk to Bot');
    }

  render() {
    const divStyle = {
      width: '100%'
    }

    const navStyle = {
      backgroundColor: '#003b79',
      height: '50px'
    }

    const navTextStyle = {
      color: '#ffffff'
    }

    const imgStyle = {
      padding: '0px'
    }

    const chatStyle = {
      border: '1px solid #ccc'
    }

    var boundSendMessage = this.sendMessage.bind(this);

    return (
      <div style={divStyle}>
          <Navbar style={navStyle}>
            <Navbar.Header>
              <Navbar.Brand>
                <img src="images/header_image_rbs.jpg" style={imgStyle} />
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        <Grid>
            <Row className="show-grid">
              <Col xs={6} xsOffset={3}>
                <div style={chatStyle}>
                  <ChatHistory messages={this.state.messages}></ChatHistory>
                  <ChatInput sendMessage={boundSendMessage}></ChatInput>
                </div>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
