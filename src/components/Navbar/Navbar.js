import React from "react";
import "./Navbar.css";




const Navbar = props => <nav className="navbar">{props.children}
  

<h2>Score:{props.score}</h2>
<h2>Top Score:{props.topScore}</h2>

</nav>;


export default Navbar;