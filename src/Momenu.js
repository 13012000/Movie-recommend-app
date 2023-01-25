import React from "react";
import { NavLink } from "react-router-dom";

const Momenu = () =>{
    return(
        <>
        <nav className = "navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid mx-auto">
    <span class="navbar-brand mb-0 h1">Movie/Series Recommendation Web-App</span>
  </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-2">
      <li className="nav-item active">
            <NavLink  className="nav-link" to = '/' >Home</NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to = '/search' >Search</NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink className="nav-link" to = '/About' >About</NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink className="nav-link" to = '/Contact' >Contact</NavLink>
            </li>
            </ul>
            </div>
        </nav>
</>
)
}

export default Momenu;