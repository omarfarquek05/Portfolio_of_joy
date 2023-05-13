import React, { useContext } from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Admin from "../assets/admin dashboard.png";
import Bank from "../assets/modren bank.png";
import MusicApp from "../assets/musicapp.png";

import { themeContext } from "../Context";

const Portfolio = () => {
 
  
 // context
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio'>
   {/*Heaing*/}
   <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span> 
   <span>Portfolio</span>
   
   {/* swipper*/}
   <Swiper
   spaceBetween={20}
   slidesPerView={3}
   grabCursor={true}
   className="portfolio-slider"
   >

   <SwiperSlide>
   <img src= {Bank} alt=" " />
   </SwiperSlide>
   
   <SwiperSlide>
   <img src={MusicApp} alt=" " />
   </SwiperSlide>

   <SwiperSlide>
   <img src={ Admin} alt=" " />
   </SwiperSlide>

   
   <SwiperSlide>
   <img src={Admin} alt=" " />
   </SwiperSlide>


   </Swiper>
    
    
    </div>
  );
}

export default Portfolio;