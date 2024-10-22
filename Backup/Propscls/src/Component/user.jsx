import React from "react";
import Employee from "./employee";
class User extends React.Component{
    uid=101;
    uname="rahul";

    render(){
    return(<div>
        <h1>User Component</h1>
        <hr/>
        <Employee prop1={"GE"} id={this.uid} name={this.uname}/>
    </div>)
    }
    
}

export default User