import React, { useState } from 'react'

const Login = () => {
    let [user,setUser]=useState({email:'',password:''})
    let emailHandler=(event)=>{
        //setUser({email:event.target.value})
        //setUser({password:event.target.value})
        setUser({...user,email:event.target.value})
    }
    let passwordHandler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    let submitHandler=(event)=>{
      event.preventDefault();
        console.log(user)
    }
  return (
    <div className='container'>
        Login component
        <pre>{JSON.stringify(user)}</pre>
        <div className="row">
          <div className="col-5">
          <form onSubmit={submitHandler}>
          <div className='form-group'>
          <label>Email:</label>
          <input type="email" className='form-control' onChange={emailHandler}/>
          </div>
          <div className='form-group'>
          <label>Password:</label>
          <input  className='form-control' type="password" onChange={passwordHandler}/>
          </div>
          <div>
          <input  className='btn btn-primary' type="submit" value='login' />
          </div>
        </form>
          </div>
        </div>
        
        
    </div>
  )
}

export default Login