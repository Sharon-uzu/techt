import ReactPlayer from 'react-player';
import React, {useEffect, useRef, useState } from "react";
import {useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import img from '../../Images/UnlockPotential.jpg'
import img1 from '../../Images/Simplicity.jpg'
import img2 from '../../Images/Class&Technology.jpg'
import { FaStar } from "react-icons/fa";
import Footer from '../Components/Footer'
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdTask } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import cv from '../../pdf/fullstack-blockchain.pdf'
import Modal from "react-modal";
import { Supabase } from "../../config/supabase-config";


const VIDEO_PATH = 'https://youtu.be/h2_bCO3dc58';

const BlockchainFullStack = () => {

  const initialValues = {
    email: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});


  const handleSubmit = (e) => {
    setFormErrors(validate(formData));
    
  };



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }else{
        Supabase.from("TechtanEmails")
        .upsert([
          {
            email: formData.email,
          },
        ])
        .then((response) => {
          console.log(response);
          setCurriculum(true);
          setSubmit(false);
        });
          }
    return errors;
  };



  

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [submit, setSubmit] = useState(true);
  const [curriculum, setCurriculum] = useState(false)


  function openModal(){
    setIsOpen(true)
  }

  function closeModal(){
    setIsOpen(false)
  }



  
  
    const handleDownload = () => {
        setCurriculum(true);
        setSubmit(false);
      // }
    };
  

    const playerRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);

  



  return (
    <div className='course'>
      <Header/>

      <div className='users'>
        <h1>Blockchain Fullstack Course</h1>
        <span className='user'>
          <FaUserGroup/>
          Maximum of 10 persons in a class.

        </span>
      </div>

      

      <section className='course1'>
      

        <div className='course-left'>
          <h1>This Course Includes</h1>
          <div>
            <TbUsersGroup className='c-i'/>
            <span>Physical and Intensive training</span>
          </div>

          <div>
            <FaFileDownload className='c-i'/>
            <span>Installation of software/tools</span>
          </div>

          <div>
            <MdOutlineNoteAlt className='c-i'/>
            <span>Hands-On Practicals</span>
          </div>

          

          <div>
            <MdTask className='c-i'/>
            <span>Tasks/Assigments</span>
          </div>

          <div>
            <MdAssuredWorkload className='c-i'/>
            <span>Automatic Internship/Job placement</span>
          </div>

          <div>
            <FaNetworkWired className='c-i'/>
            <span>StartUp incubation and acceleration</span>
          </div>

          <div>
            <AiOutlineProject className='c-i'/>
            <span>Real-life Projects</span>
          </div>

          <div>
            <GrCertificate className='c-i'/>
            <span>Certificate</span>
          </div>


        </div>


        <div className='course-r'>

          <img src={img} alt="" />

          <div>
            <span className='price'>
              <span>NGN600,000.00</span>
              <span className='price-slash'>NGN700,000.00</span>
            </span>
            <Link to='/blockchainenroll'><button>Enroll Now</button></Link>

          </div>
          

        </div>



      </section>


    <section className='course2'>
      <div className='course2-l'>

        <div className='course2-top'>

          <h1>About the Course</h1>
          <p>Embark on a transformative journey in blockchain fullstack development. Learn the ins and outs of blockchain technology, from decentralized applications (DApps) to smart contracts. Gain hands-on experience with cutting-edge technologies and earn a globally recognized certificate upon completion. At Techtan, we go beyond education; we guarantee automatic job placement post-training, empowering you to launch your career with confidence in the dynamic field of blockchain technology.</p>

        </div>

        <div className='course2-b'>

          <h4>Course Content</h4>
       

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>Introduction to Blockchain Technology</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>Smart Contract Development</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>Frontend Development for Blockchain Applications</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span> Backend Development for Blockchain Applications</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>Decentralized Application (DApp) Development</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>Advanced Topics and Project Development</span>
            <span className='star'>*</span>

          </div>
          <div className="btn">
            <button onClick={openModal} style={{cursor:'pointer'}}>Download full curriculum</button>
          </div>
          
        </div>

      </div>

      <div className='course2-r'>


          <ReactPlayer ref={playerRef} width='100%' height='300px' url={VIDEO_PATH} controls={true} playing={true} muted  className='video' style={{width:'50px'}}/>

          <div>
            <span className='price'>
              <span>NGN600,000.00</span>
              <span className='price-slash'>NGN700,000.00</span>
            </span>
            <Link to='/blockchainenroll'><button>Enroll Now</button></Link>
          </div>
          

        </div>


    </section>

    <div className="learn">
      <h3>Blockchain Fullstack Tools to learn</h3>

      <div>
        <h5>Frontend Development</h5>
      </div>

      <div>
        <h5>Backend Development</h5>
      </div>

      <div>
        <h5>Database Management</h5>
      </div>

      <div>
        <h5>Blockchain Development</h5>
      </div>

      <div>
        <h5>Integration and Deployment</h5>
      </div>

     
      
    </div>


    <section className='illustrate'>

      <h2><span></span> Welcome To Techtan <span></span></h2>

      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <img src={img1} alt="" />
        
      </div>

      <div>
        <img src={img2} alt="" />
       
      </div>

    </section>

    


    {/* MODAL */}

    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            width:'100%',
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1200000000000,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          },
        }}
      >
  
  <div className="m-message">
          <div className="message">
            <div>
            {/* <p>{emailError && <p style={{ color: 'red' }}>{emailError}</p>}</p> */}
            <p style={{ color: "red", fontSize: "14px" }}>{formErrors.email}</p>


            {
                submit ? (<>
              <input
                type="email"
                placeholder="Enter your email"
                // value={email}
                // value={formData.email}
                // onChange={handleEmailChange}
                value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              />
              </>):null
              }
               
              <div className="btn">
              {
                submit ? (<>
                  <button onClick={handleSubmit}>Submit</button>
              </>):null
              }

              {
                curriculum ? (<>
                <a href= {cv} download className='tab'><button 
                onClick={handleDownload}
                >
                  Download full curriculum</button></a>
                  
                </>):null
              }
              
              <button className='btn2' onClick={closeModal}>Close</button>
              </div>
              
            </div>
          </div>
          
        </div>
        
      </Modal>

    <Footer/>
    </div>
  )
}

export default BlockchainFullStack