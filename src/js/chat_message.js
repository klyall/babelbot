import React, { Component } from "react"

export default class ChatMessage extends Component {
  render() {
    const baseMessageStyle = {
      display: "inline-block",
      padding: "12px 20px",
      borderRadius: "10px"
    }

    const botMessageStyle = {
      background: "#81AA28",
      color: "white",
      display: "inline-block",
      fontSize: "2rem",
      padding: "12px 20px",
      borderRadius: "10px",
      textAlign: "right"
    }

    const userMessageStyle = {
      background: "#06B3BB",
      boxSizing: "content-box",
      color: "white",
      display: "inline-block",
      fontSize: "2rem",
      padding: "12px 20px",
      borderRadius: "10px",
      textAlign: "left",
      width: "auto",
      WebkitBoxSizing: "content-box",
      MozBoxSizing: "content-box"
    }

    const nameStyle = {
      fontSize: "0.6em"
    }

    console.log(typeof botMessageStyle)
    var messageStyle = baseMessageStyle
    messageStyle["textAlign"] = this.props.message.from === "You"
      ? "left"
      : "right"

    var userStyle = this.props.message.from === "You"
      ? userMessageStyle
      : botMessageStyle

    if (this.props.message.from.includes("You")) {
      userStyle = userMessageStyle
    } else if (this.props.message.from.includes("Security")) {
      userStyle = Object.assign({}, botMessageStyle)
      userStyle["background"] = "#E84261"
    } else if (this.props.message.from.includes("Resilience")) {
      userStyle = Object.assign({}, botMessageStyle)
      userStyle["background"] = "#F8B441"
    } else {
      userStyle = botMessageStyle
    }

    return (
      <div style={messageStyle}>
        <div style={userStyle}>
          <span
            dangerouslySetInnerHTML={{ __html: this.props.message.message }}
          />
          <div style={nameStyle}>{this.props.message.from}</div>
        </div>
      </div>
    )
  }
}
