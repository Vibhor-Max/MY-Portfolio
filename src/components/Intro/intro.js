import React from "react";
import './intro.css'
import bg from "../../assets/user_icon.jpg";
import btnImg from "../../assets/suitcase.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
       <div className="introcontent" >
        <span className="hello">Hello,</span>
        <span className="introText"> I'm <span className="introName">Vibhor </span> <br></br>Full Stack Developer
        </span>
        <p className="introPara">Resourceful professional with successful track 
        record in developing <br></br>innovative web designs and features. </p>
        <Link><button className="btn">
                <img src={btnImg} alt="hire Me" className="btnImg"/> Hire Me
            </button>
            </Link>
       </div>
       <img className="bg" src={bg} alt="profile"/>
    </section>
  );
}

export default Intro;
