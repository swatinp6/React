import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from './redux/Products/products.action';

const Product = () => {
    let dispatch=useDispatch();
    let Product=useSelector((state)=>{
        return state
    })
    let incrHandler=()=>{
        dispatch(incrAction())
    }
    let decrHandler=()=>{
        dispatch(decrAction())
    }


  return (
    <div>
        <h1>product component</h1>
        <button onClick={incrHandler}>+</button>
        {Product.qty}
        <button onClick={decrHandler}>-</button>
    </div>
  )
}

export default Product