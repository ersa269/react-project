import React from 'react';
import Portfolio1 from '../../assets/work-1.png';
import Portfolio2 from '../../assets/work-2.png';
import Portfolio3 from '../../assets/work-3.png';
import Portfolio4 from '../../assets/work-1.png';
import Portfolio5 from '../../assets/work-2.png';
import Portfolio6 from '../../assets/work-3.png';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="works">
         <h2 className="worksTittle">My Portfolio</h2>
        <span className="worksDesc">"We take pride in meticulously attending to the 
           smallest details and ensuring that our work is pixel-perfect. We are 
           enthusiastic about leveraging our skills and experience to assist businesses 
           in achieving their goals and establishing a strong online presence."
        </span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg"/>
            <img src={Portfolio2} alt="" className="worksImg"/>
            <img src={Portfolio3}  alt="" className="worksImg"/>
            <img src={Portfolio4} alt="" className="worksImg"/>
            <img src={Portfolio5} alt="" className="worksImg"/>
            <img src={Portfolio6} alt="" className="worksImg"/>
        </div>
         <button className="workBtn">See More</button>
     
    </section>
  )
}

export default Portfolio;