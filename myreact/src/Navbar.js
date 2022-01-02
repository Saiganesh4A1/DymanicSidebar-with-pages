import React from "react";
import {Link} from 'react-router-dom'

function Navbar()
{
    return(
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Dashboard"><li>Dashboard</li></Link>
            </ul>
        </div>
    )
}

// These all are about router activities so we must import browserrouter in app.js to use it..

export default Navbar