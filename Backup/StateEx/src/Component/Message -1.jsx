import React, { Component, Fragment } from 'react'

export class Message extends Component {
    msg='hello'
    gmHandler=()=>{
        this.msg="good morning";
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHandler=()=>{
      this.msg="good night";
      console.log(this.msg)
      this.forceUpdate()
    }
  render() {
    console.log("render method")
    return (
      <Fragment>
        <h1>Message component</h1>
        <h2>wish Message:{this.msg}</h2>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
      </Fragment>
    )
  }
}

export default Message