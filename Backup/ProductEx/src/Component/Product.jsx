import React, { Component } from 'react'

export class Product extends Component {
    state={
        Qty:1
    }
    incrHandler=()=>{
        this.setState({Qty:this.state.Qty + 1})
    }
    decrHandler=()=>{
        this.setState({Qty:this.state.Qty - 1})
    }
  render() {
    return (
      <div>
        <h1>Increment/Decrement program</h1>
        <button onClick={this.incrHandler}>+</button>
        Count : {this.state.Qty}
        <button onClick={this.decrHandler}>-</button>
      </div>
    )
  }
}

export default Product