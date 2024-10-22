import React, { Component } from 'react'

export class Wish extends Component {
    state={
        msg:"HELLO!!!"
    }
    updateHandler=(value)=>{
        this.setState({msg:value})
    }
  render() {
    return (
      <div>
        <h1>Event Binding and Event Handling:{this.state.msg}</h1>
        <button onClick={this.updateHandler.bind(this,"Good Mrng")}>GM</button>
        <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>
        <button onClick={this.updateHandler.bind(this,"Good Evening")}>GE</button>
        <button onClick={this.updateHandler.bind(this,"Good nigth")}>GN</button>
      </div>
    )
  }
}

export default Wish