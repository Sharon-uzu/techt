import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AboutH from '../Components/AboutH'
import Approach from '../Components/Approach'
import Testimony from '../Components/Testimony';
import Faq from '../Components/Faq';
import Serve from "../Components/Serve";
import VM from "../Components/VM";
import { MdOutlineCleanHands } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { FaPeopleLine } from "react-icons/fa6";
import { FaHandBackFist } from "react-icons/fa6";
import Help from "../Components/Help";




const About = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>
        <div className="about-hero">
            <div className="abt-cover"></div>
            <button>ABOUT US</button>
        </div>

        

        <AboutH/>
        <Serve/>
        <Approach/>
        <VM/>

        <div className="core">
            <h2>Our Core Value</h2>
            <section>

                <div>
                    <MdOutlineCleanHands className='core-i'/>
                    <h4>Integrity</h4>
                    <p>We uphold the highest standards of integrity, transparency, and ethical conduct in all our interactions, building trust with our clients, partners, and community through honesty, accountability, and respect.</p>
                </div>

                <div>
                    <GrSchedules className='core-i'/>
                    <h4>Excellence</h4>
                    <p>We strive for excellence in tech education, delivering high-quality programs and services that exceed expectations, foster innovation, and empower individuals to achieve their goals in the digital realm.</p>
                </div>

                <div>
                    <FaPeopleLine className='core-i'/>
                    <h4>Collaboration</h4>
                    <p>We foster a culture of collaboration, teamwork, and inclusivity, valuing diverse perspectives and leveraging collective strengths to drive innovation, foster creativity, and achieve shared goals in the tech community.</p>
                </div>

                <div>
                    <FaHandBackFist className='core-i'/>
                    <h4>Empowerment</h4>
                    <p>We believe in the power of education to empower individuals and transform lives. We empower learners to unlock their full potential, embrace lifelong learning, and thrive in the digital age.</p>
                </div>

            </section>
        </div>

        <Help/>

        <Testimony/>
        <Faq/>

        <Footer/>
    </div>
  )
}

export default About