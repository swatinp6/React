import React from 'react'

const Cart = (props) => {
  return (
    <div>
        <h1>Cart component</h1>
        <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

export default Cart