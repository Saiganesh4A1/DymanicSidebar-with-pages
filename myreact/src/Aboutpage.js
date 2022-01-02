import React from 'react';
import {useNavigate} from 'react-router-dom'

function Aboutpage() {
    let gotohome=useNavigate()
    const Aboutuser = () => {
        gotohome("/home",{state:{from:{pathname:'/about'}}})
    }
    return (
        <div>
            <h1>About Login Details</h1>
            <br></br>
            FirstName:<input type="text" id='txtfirst' placeholder='enter your FirstName'></input>
            <br></br>
            LastName:<input type="text" id='txtlast' placeholder='enter your LastName'></input>
            <br></br>
            <button type="button" onClick={Aboutuser}>Back To Home</button>
        </div>
    )
}

export default Aboutpage
