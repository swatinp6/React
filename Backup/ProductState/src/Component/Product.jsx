import React, { useState } from 'react'

const Product = () => {
    let [qty,setQty]=useState(1)
    let incrHandler=()=>{
        setQty(qty+1)
    }
  return (
    <React.Fragment>
        <h1>Quantity:{qty}</h1>
        <button onClick={incrHandler}>+</button>
        <button onClick={()=>{setQty(qty-1)}}>-</button>
    </React.Fragment>
  )
}

export default Product