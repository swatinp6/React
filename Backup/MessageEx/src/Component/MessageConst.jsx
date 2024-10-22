import React, { Component } from 'react'

export class MessageConst extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:"Hello"
        }
    }
    updateHandler=(value)=>{
        this.setState({msg:value})
    }
  render() {
    return (
      <div>
        <h1>Using constructor:{this.state.msg}</h1>
        <button onClick={this.updateHandler.bind(this,"GOOD MRNG")}>GM</button>
        <button onClick={this.updateHandler.bind(this,"GOOD NYT")}>GN</button>
      </div>
    )
  }
}

export default MessageConst