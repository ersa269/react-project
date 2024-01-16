import React from 'react';
import UiUx from '../../assets/uiux.jpg';
import Web from '../../assets/web.jpg';
import App from '../../assets/app.jpg';
import './about.css';

const About = () => {
  return (
     <section id="about">
           <span className="aboutTittle">What We do </span>
            <span className="aboutDesc">We are skilled and passionate web designers with experience in crafting visually appealing and user-friendly websites. We possess a strong understanding of design principles and a keen eye for detail, ensuring every pixel comes together flawlessly. Our technical expertise encompasses proficiency in HTML, CSS, and JavaScript, allowing us to build both beautiful and functional web experiences.</span>
         <div className="aboutBars">
            <div className="aboutBar">
                <img src={UiUx} alt="UiUx" className="skillBarImg"/>
               <div className="aboutBarText">
                    <h2>UI/UX Design</h2>
                    <span> Our passion for design shines through in every project, ensuring a delightful and memorable user experience that leaves a lasting impression.</span>
               </div>
            </div>
            <div className="aboutBar">
                <img src={Web} alt="Web" className="skillBarImg"/>
               <div className="aboutBarText">
                    <h2>website Design</h2>
                    <span>Our commitment to crafting eye-catching and engaging web experiences is evident in every project, ensuring a unique and memorable online presence for our clients.</span>
               </div>
            </div>
            <div className="aboutBar">
                <img src={App} alt="App" className="skillBarImg"/>
               <div className="aboutBarText">
                    <h2>App Design</h2>
                    <span>We specialize in crafting visually compelling and attention-grabbing app designs that captivate users.</span>
               </div>
            </div>
         </div>
     </section>
  );
}

export default About;