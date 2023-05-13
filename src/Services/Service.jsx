import React, { useContext } from 'react'
import "./Service.css";
import HeartEmoji from "../assets/heartemoji.png"
import Glasses from "../assets/glasses.png";
import Humble from "../assets/humble.png";
import Card from '../Card/Card';
import cv from "./Resume1.pdf";
import { themeContext } from "../Context";


const Service = () => {

   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;


  return (
    <div className='service' id='Service '>

    {/* left side*/}
    <div className='s-left'>
   
    <span style={{ color: darkMode ? "white" : "" }}>MY awesome </span>
    <span> services</span>
    <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>

        <a href={cv} download>
        <button className='button s-button'>Download CV </button>
        </a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}> 
        </div>
    
    </div>

       {/* right side*/}
    <div className="cards">

    <div style={{left: "14rem"}}>
    <Card 

    emoji={HeartEmoji }
    heading={"Design"}
    detail={"html, css, tailwind css, material UI, Bootstrap"}
     />
     </div>

     <div style={{left: "-4rem" , top:"12rem"}}>
     <Card 

     emoji={HeartEmoji}
     heading={"Programming Language & Frameworks"}
     detail={"Javascript,Java, ReactJs, NextJs, Typescript, redux/redux toolkit"}
      />
      </div>

      
      <div style={{left: "12rem" , top:"19rem"}}>
      <Card 
 
      emoji={HeartEmoji}
      //heading={"Backend Languese & Database"}
      detail={"Nodejs, ExpressJS, Mongodb, SQL, sanity"}
       />
       </div>
 
       <div className="blur s-blur2" style={{ background: "var(--purple)" }}> </div>

       </div>

    </div>
  );
}

export default Service;