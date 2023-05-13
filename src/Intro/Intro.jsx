import React, { useContext } from 'react'
import "./Intro.css"
import Linkedin from "../assets/linkedin2.png";
import Insta from "../assets/instagram2.png";
import Github from "../assets/github2.png";
import vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import joy from "../assets/joy.png";
import glassesimoji from "../assets/glassesimoji.png";
import thumbup from "../assets/thumbup.png";
import crown from "../assets/crown.png";
import FloatinDiv from "../FloatingDiv/FlooatinDiv";

import { themeContext } from "../Context";

const Intro = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id='Home'>
      {/*Left Side*/}
      <div className="i-left">
        <div className="i-name">
          <span  style={{ color: darkMode ? "white" : "" }}>Hi! I'm</span>
          <span>Omar Farquek Joy</span>
          <span>
            Full Stack Web Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>

        <button className="button i-button">Hire Me</button>

        <a href=" ">
        <div className="i-icons">
        {/* color changing icons :  style={{filter : "invert(100%) 
        saturate(18%) sepia(1211%) hue-rotate(180deg) brightness(107%) contrast(106%) "}}*/}
       
          <img src={Linkedin} alt=" linkin" />
          <img src={Insta} alt="insta " />
          <img src={Github} alt=" github" />
        
        </div>
        </a>
      </div>

      {/*Rightt Side*/}
        {/*   
      <img src={vector1} alt=" "  />
     <img src={Vector2} alt=" "  /> 
    */}
      <div className="i-right">
     <img className='pic' src={joy} alt=" "  />

     <div className="blur " style={{ background: "rgb(238 210 255)" }}></div>
     <div
       className="blur"
       style={{
         background: "#C1F5FF",
         top: "17rem",
         width: "21rem",
         height: "11rem",
         left: "-9rem",
       }}
     >
     </div>

      </div>

      {/* 
      <div>
      <FloatinDiv/>
      </div>
      */}

    </div>
  );
}

export default Intro;