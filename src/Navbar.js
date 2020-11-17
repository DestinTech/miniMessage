import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar () {

    return (
        <div>
            <Link to="/New">New Message</Link>
            <Link to="/">Home</Link>
        </div>
    )
    
}
export default Navbar