import React, {useEffect } from "react";
import {useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Abt from '../Components/Abt';
import Why from '../Components/Why';
import Top from '../Components/Top';
import Testimony from '../Components/Testimony';
import Footer from '../Components/Footer';
import Packages from '../Components/Packages';
import Faq from '../Components/Faq';
import Cohort from "../Components/Cohort";

const Home = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div className="hom-m" style={{overflow:''}}>
      <div className="overlay">
        <h3>Launching 15th May, 2024 In Port Harcourt.</h3>
        <h3 style={{color:'#3F934D'}}>See You Soon.</h3>
      </div>

        <Header/>
        <Hero/>
        <Why/>
        <Top/>
        <Cohort/>
        <Abt/>
        <Packages/>
        <Testimony/>
        <Faq/>
        <Footer/>
        
    </div>
  )
}

export default Home