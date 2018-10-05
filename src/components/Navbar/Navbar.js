import React from "react";
import "./Navbar.css";



const Navbar = props => <nav className="navbar">{props.children}
    <ul>
        

        {/* <li className="brand'>
            <a href="/">Clicky Game</a>
            </li>
            <t score={} topScore={}>
            <li className="">
            </t> */}
    </ul>

<h2>Score:{props.score}</h2>
<h2>Top Score:{props.topScore}</h2>

</nav>;


export default Navbar;