import React from 'react'
import { gmAction,geAction } from './redux/Messages/messages.action'
import { useDispatch, useSelector } from 'react-redux'
const Message = () => {
    let dispatch=useDispatch();
    let message=useSelector((state)=>{
        return state.message
    })
    let gmHandler=()=>{
        dispatch(gmAction())
    }
    let geHandler=()=>{
        dispatch(geAction())
    }
  return (
    <div>
        <h2>message componnet</h2>
        <pre>{JSON.stringify(message)}</pre>
        <h1>{message.msg}</h1>
        <button onClick={gmHandler}>GM</button>
        <button onClick={geHandler}>GE</button>
    </div>
  )
}

export default Message