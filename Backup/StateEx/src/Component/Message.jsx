import React, { Component, Fragment } from 'react'

export class Message extends Component {
   state={
    msg:"hello"
   }
    gmHandler=()=>{
       this.setState({msg:"good mrng"})
    }
    gnHandler=()=>{
      this.setState({msg:"good nyt"})
    }
  render() {
    console.log("render method")
    return (
      <Fragment>
        <h1>Message component</h1>
        <h2>wish Message:{this.state.msg}</h2>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
      </Fragment>
    )
  }
}

export default Message