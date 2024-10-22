import React, { useState } from 'react'

const Messagefun = () => {
    let [msg,updateHandler]=useState("HELLO!!!!")
    //<button onClick={updateHandler.bind(null,"Good Mrng")}>GM</button>
    
  return (
    <div>
        <h1>Event Binding-Function:{msg}</h1>
        <button onClick={updateHandler.bind(this,"Good Mrng")}>GM</button>
        <button onClick={updateHandler.bind(this,"Good Aftrnon")}>GA</button>
        <button onClick={updateHandler.bind(this,"Good evng")}>GE</button>
        <button onClick={updateHandler.bind(this,"Good nyt")}>GN</button>
    </div>
  )
}

export default Messagefun