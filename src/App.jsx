import React from 'react'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import Card from './Card/Card'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import Service from './Services/Service'
import Experience from './Experience/Experience'
import FlooatinDiv from './FloatingDiv/FlooatinDiv'
import Testimonial from './Testimonial/Testimonial'
import Toggle from './Toggle/Toggle'
import Footer from './Footer/Footer'
import Work from './Works/Work'


import { useContext } from 'react'
import {themeContext} from "./Context"


import './App.css'

function App() {

  
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  

  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }} 
    >
    <Navbar/>
    <Intro/>
    <Service/>
    <Experience/>
    <Work/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>  
    <Footer/>

    
   

    </div>
  );
}

export default App;
