import React from "react";
import './works.css'
import Portfolio from './../../assets/active (1).png';
import Portfolio1 from './../../assets/active.png';
import Portfolio2 from './../../assets/work-time.png';
import Portfolio3 from './../../assets/working.png';
import Portfolio4 from './../../assets/working (1).png';
import Portfolio5 from './../../assets/balance.png';





const Works = () => {
    return (
        <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDescription">Passionate and experienced Full Stack Developer with a strong focus on building responsive and user-friendly web applications. Skilled in front-end and back-end technologies and proficient in various programming languages and frameworks, I excel at optimizing performance, ensuring security, and integrating complex systems. . Committed to delivering high-quality, scalable solutions and continuously learning the latest industry trends to enhance my craft.</span>
        <div className="worksImgs">
            <img src={Portfolio} alt="" className="worksImg" />
            <img src={Portfolio1} alt="" className="worksImg"  />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
        </div>
        <button className="seeMoreBtn">See More</button>
        </section>
    )
}

export default Works;