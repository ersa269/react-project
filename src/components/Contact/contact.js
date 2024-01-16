import React from 'react';
import FaceBook from '../../assets/facebook.png';
import Insta from '../../assets/insta.png';
import Youtube from '../../assets/youtube.png';
import Twitter from '../../assets/twitter.png';
import './contact.css';

const Contact = () => {
  return (
       <section id="contactPage">
           <div id="contact">
              <h1 className="contactPageTittle">Contact Us</h1>
              <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactform">
                  <input  type="text" className="name" placeholder="Your Name"/>
                  <input  type="email" className="email" placeholder="Your Email"/>
                  <textarea  type="text" className="msg" rows="5" placeholder="Your Message"></textarea>              
                  <button type="submit" value="Send" className="submitBtn">Submit</button>
                  <div className="links">
                      <img src={FaceBook} alt="facebook" className="link"/>
                      <img src={Insta} alt="instagram" className="link"/>
                      <img src={Youtube} alt="youtube" className="link"/>
                      <img src={Twitter} alt="twitter" className="link"/>
                  </div>
               </form>
           </div>      
       </section>
  )
}
export default Contact;