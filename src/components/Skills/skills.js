import React from "react";
import './skills.css';
import UIDesign from './../../assets/uidesign.png';
import WebDesign from './../../assets/webdesign.png';
import backendDesign from './../../assets/backend.png';

const Skills = () => {
    return (
        <section id="skills">
           <span className="skillsTitle">
            What I Do
            </span>
            <span className="skillsDescription">
                I'm a resourceful professional with successful track record in developing innovative web designs and features. Possesses solid knowledge of JavaScript, Typescript, React, Angular, HTML, CSS, Node.js, SQL, Java, Bootstrap, AWS and Azure with ability to quickly learn new technologies and a magnificent team player. Demonstrated success in identifying and resolving complex code issues.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="uiDesign" className="skillImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Innovative UI/UX Developer with a Passion for Crafting Engaging User Experiences</p>
                        <p>Technologies: React, Angular, Javascript/ES6, Typescript, HTML, CSS</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="webDesign" className="skillImg"/>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Creative Website Design Developer Focused on Building Stunning and User-Friendly Websites</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={backendDesign} alt="backendDesign" className="skillImg"/>
                    <div className="skillBarText">
                        <h2>Backend</h2>
                        <p>Skilled Backend Developer Specializing in Efficient and Scalable Server-Side Solutions</p>
                        <p>Technologies: JAVA, C#, .Net, Python, APIs, SQL, Oracle, AWS, Azure</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;