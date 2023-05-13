import React,{useState} from 'react'
import Toggle from '../Toggle/Toggle';
import "./Navbar.css";
import logo from "../assets/j.png";

import UilBars from "@iconscout/react-unicons/icons/uil-bars"

import { Link } from "react-scroll";

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className='navbar'>

    {/*Left side*/}
    <div className='n-left'> 
    <div className='name'>


    <img className='logo' src={logo} alt=" "/>
    
    </div>
   <Toggle/>
    </div>
   

    {/* Right side*/}
   <div className='n-right'>
   <nav className='nav'>

  

   <ul className='ul'>
<li> <Link activeClass="active"  to="Navbar" spy={true} smooth={true}>Home</Link> </li>
<li> <Link to="contact" spy={true} smooth={true}>Contact</Link> </li>
<li> <Link to="about" spy={true} smooth={true}>About</Link> </li>
<li> <Link to="service" spy={true} smooth={true}>Service </Link> </li>

</ul>


   </nav>
   
   <button className='button n-button'>Contact Me</button>
   
   </div>
    

    </div>
  );
}

export default Navbar;