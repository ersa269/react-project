import React from 'react';
import bg from '../../assets/background.png';
import btnImg from '../../assets/hire.png'
import {Link} from 'react-scroll';
import './home.css';


const Home = () => {
  return (
    <section id="home">  
    <div class="toggleBtn">
    </div>
       <div className="homeContent">
           <span className="hello">Hello.</span>
           <span className="introText">We're <span className="introName">Byte Busters.</span><br/>Website Designer</span>
           <p className="intropara">We are a skilled web designer with experience in creating visually <br/>appealing and user friendly websites</p>
           <Link><button className="btn"><img src={btnImg} className="btnImg" alt="Hire Me"/>Hire Me</button></Link>
        </div>
          <img src={bg} alt="background" className="bg"/>
    </section>
  )
}

export default Home;
