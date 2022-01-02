import React from 'react';
import { useNavigate } from 'react-router-dom'

function Homepage() 
{
    let navigate=useNavigate()
    const Adduser = () =>{
        navigate("/about",{state:{from:{pathname:'/home'}}})
    }
    return (
        <div>
                <h3>Welcome..This is Home Page</h3>
                <br></br>
                <button type="button" onClick={Adduser}>Add User</button>
        </div>
    )
}

export default Homepage
