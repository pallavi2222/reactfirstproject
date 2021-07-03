import React from 'react'
import Logo from '../assests/logo2.png'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo}/>
                <div className="vl"></div>
                <div className="leftContent">
                    <h5>FOR THE PEOPLE  </h5>
                    <div className="leftContent2">
                    SHAPING THE INCLUSIVE GROWTH AROUND THE WORLD
                        </div>
                </div>
               
            </div>
            <div className="rightSide">
                 <Link to="/"> Home </Link>
                 <Link to="/About"> About </Link>
                 <Link to="/People"> People </Link>
                 <Link to="/Operation"> Operation </Link>
                 <Link to="/Reports"> Reports </Link>
         </div>
         
     </div>
     
    );
}

export default Navbar