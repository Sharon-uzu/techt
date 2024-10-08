import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Footer from '../Components/Footer';


const Contact = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>

        <div className="contact">
            <h2>Contact Us</h2>
            <p className='info'>Need assistance or have questions? contact us! Our team is ready to help</p>

            <form className='contact-f'>
                <div className='c-l'>
                    <h4>Contact Information</h4>
                    <a href="mailto:hi@mytechtan.com" className="link">
                        <MdOutlineMailOutline className='con-i'/>
                        <div>
                            <h6>Email Address</h6>
                            <p><a href="mailto:hello@mytechtan.com" style={{textDecoration:'none', color:"#676967"}}>hello@mytechtan.com</a></p>
                        </div>
                    </a>

                    <a href="tel:093635" className="link">
                        <MdOutlinePhoneInTalk className='con-i'/>
                        <div>
                            <h6>Phone Number</h6>
                            <p><a href="tel:07040789774" style={{textDecoration:'none', color:"#676967"}}>07040789774</a></p>
                        </div>
                    </a>

                    <div className="link">
                        <CiLocationOn className='con-i'/>
                        <div>
                            <h6>Location</h6>
                            <p>No. 7 Umuechem Street, Dline, Behind Energymatic Filling Station, Olu Obasanjo, PH.</p>
                        </div>
                    </div>

                    <div className='socials'>
                        <a href="https://facebook.com"><FaFacebookF className='sos-i'/></a>
                        <a href="https://instagram.com"><FaInstagram className='sos-i'/></a>
                        <a href="https://twitter.com"><FaTwitter className='sos-i'/></a>
                        <a href="https://linkedin.com"><CiLinkedin className='sos-i'/></a>
                    </div>

                </div>



                <div className='c-r'>

                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email Address' />
                    <textarea placeholder='Message'></textarea>
                    <button>Send</button>

                </div>


            </form>
        </div>

        <Footer/>
    </div>
  )
}

export default Contact