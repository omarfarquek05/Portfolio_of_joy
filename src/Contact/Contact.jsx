import React, {useRef,useState, useContext } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser";

//service id : service_e2jgmy9

import { themeContext } from "../Context";

const Contact = () => {
   const[done , setDone ] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 emailjs.sendForm('service_e2aeyfk', 'template_j1f9wzr', form.current, 'l--kIacMZxJVd3_mj')
      .then((result) => {
        setDone(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 // context
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;

  return (
    <div className='contact-form' id='contact'>

    {/* left side copy and paste from work section */}
    <div className="w-left">
    <div className="awesome">
      {/* darkMode */}
      <span style={{ color: darkMode ? "white" : "" }} >Get in Touch</span>
      <span style={{ color: darkMode ? "white" : "" }}>Contact Me</span>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}> </div>
    </div>
  </div>
  {/* right side form */}
  <div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" className="user"  placeholder="Name"/>
      <input type="email" name="user_email" className="user" placeholder="Email"/>
      <textarea name="message" className="user" placeholder="Message"/>
      <input type="submit" value="Send" className="button"/>
      <span>{done && "Thanks for Contacting me"}</span>
     
      <div
        className="blur c-blur1" style={{ background: "var(--purple)" }}> </div>
    </form>
  </div>
  
    </div>
  );
}

export default Contact;