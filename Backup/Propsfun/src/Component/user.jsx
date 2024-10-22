import React from "react";
import Employee from "./employee";

let User=()=>{
    let uid=101;
    let uname="rahul";
    return(<div>
        <h1>User Component</h1>
        <hr/>
        <Employee prop1={"GE"} id={uid} name={uname}/>
    </div>)
    
}
export default User