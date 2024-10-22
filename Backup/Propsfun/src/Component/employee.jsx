import React from "react";

let Employee=(props)=>{
    return(
        <div>
        <h1>Employee component</h1>        
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee id:{props.id} name:{props.name}</h3>
        </div>
    )
    
}

export default Employee