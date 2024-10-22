
import React from "react";
class Employee extends React.Component{
    render(){
        return(
            <div>
        <h1>Employee component</h1>        
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee id:{this.props.id} name:{this.props.name}</h3>
        </div>
        )
        
    }
}

export default Employee