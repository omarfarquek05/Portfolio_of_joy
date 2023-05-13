import React, { useContext } from 'react'
import "./Work.css"
import Upwork from "../assets/Upwork.png";
import Fiverr from "../assets/fiverr.png";
import Amazon from "../assets/amazon.png";
import Shopify from "../assets/Shopify.png";
import Facebook from "../assets/Facebook.png";

import { motion } from "framer-motion";
import { themeContext } from "../Context";

const Work = () => {

 // context
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;

  return (
    <div className="work">
      {/* left side*/}
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}> Works for All these </span>
        <span> Brands & Clients</span>
        <span>
        Lorem ispum is simpley dummy text of printing of printing Lorem
        <br />
        ispum is simpley dummy text of printingLorem ispum is simpley dummy
        text
        <br />
         dummy text of printingLorem
        <br />
        ispum is simpley dummy text of printing
      </span>

        <button className="button s-button">Contact me </button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side*/}
      <div className="w-right" id='about' >
      <motion.div 
      initial={{ rotate: 180 }}
      whileInView={{ rotate: 360 }}
      viewport={{ margin: "-40px" }}
      transition={{ duration: 3.5 , type: "spring" }}
      className='w-mainCircle'>
      
      <div className='w-secCirle'>
      <img src={Upwork} alt=" " />
      </div>

      <div className='w-secCirle'>
      <img src={Fiverr} alt=" " />
      </div>

      <div className='w-secCirle'>
      <img src={Amazon} alt=" " />
      </div>

      <div className='w-secCirle'>
      <img src={Shopify} alt=" " />
      </div>

      <div className='w-secCirle'>
      <img src={Facebook} alt=" " />
      </div>

      </motion.div>
      {/*back Circle */}
      {/* background Circles */}
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
      
      </div>


    </div>
  );
}

export default Work;