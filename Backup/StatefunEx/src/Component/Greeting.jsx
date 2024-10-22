import React, { useState } from 'react'

function Greeting(){
    //let [msg,setMsg]=useState("Hello");
    let [greet,greetMsg]=useState("Hello");
    let gmHandler=()=>{
        greetMsg("gud mrng")
    }
    let gnHandler=()=>{
        greetMsg("gud nyt")
    }
    let geHandler=()=>{
        greetMsg("gud evng")
    }
  return (
    <div>
        <h1>Greeting component:{greet}</h1>  
        <button onClick={gmHandler}>GM</button>
        <button onClick={geHandler}>GE</button>
        <button onClick={gnHandler}>GN</button> 
        <button onClick={()=>{greetMsg("good night")}}>gudnyt</button> 
    </div>
  )
}

export default Greeting