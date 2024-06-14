import React, {useRef} from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import IBM from './../../assets/ibm.png';
import UMBC from './../../assets/UMBC.png';
import MSR from './../../assets/MissionSquareRet.png';
import FB from './../../assets/facebook.png';
import IG from './../../assets/instagram.png';

const Contact = () => {
    function refreshPage(){
        window.location.reload();
    } 
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ac0cm7s', 'template_4jmi90p', form.current, {
            publicKey: 'ltxPX9zY57VLMBqxk',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email sent successfully. The page will now reload once you close the popup. Thanks!')
              refreshPage()
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
   return (
    <section id="contactPage">
        <div id="client">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
            <img src={UMBC} className="clientImg" alt="client"></img>
            <img src={IBM} className="clientImg" alt="client"></img>
            <img src={MSR} className="clientImg" alt="client"></img>
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
                Please fill out the form below to discuss any work opportunities
            </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>   
                <input type="text" placeholder="Your Name" className="name" name="from_name"/>
                <input type="email" placeholder="Your Email" className="email" name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button className="submitBtn" type="submit" value="send">Submit</button>
                <div className="links">
                    <img className="link" src={FB} alt="facebook"/>
                    <img className="link" src={IG} alt="instagram"/>
                </div>
            </form>
        </div>
    </section>
   )
  }
  
  export default Contact;