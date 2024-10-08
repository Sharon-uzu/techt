import ReactPlayer from 'react-player';
import React, {  useEffect, useRef } from "react";
import {  useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../Components/Header'
import { PiVideoThin } from "react-icons/pi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import img from '../../Images/product.webp'
import { FaStar } from "react-icons/fa";
import Footer from '../Components/Footer'
import { IoCheckmarkSharp } from "react-icons/io5";



const VIDEO_PATH = 'https://www.youtube.com/watch?v=0BnuvEoyaZ0';


const Course = () => {

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
        <h1>Graphic Design Courses</h1>
        <span className='user'>
          <FaUserGroup/>
          3,985,238 learners
        </span>
      </div>

      

      <section className='course1'>
      

        <div className='course-left'>
          <h1>This Course Includes</h1>
          <div>
            <PiVideoThin className='c-i'/>
            <span>Access to videos</span>
          </div>

          <div>
            <FaFileDownload className='c-i'/>
            <span>Downloadable Resources</span>
          </div>

          <div>
            <MdOutlineNoteAlt className='c-i'/>
            <span>Assignments</span>
          </div>

          <div>
            <GrCertificate className='c-i'/>
            <span>Certificate of completion</span>
          </div>

          <div>
            <TbUsersGroup className='c-i'/>
            <span>Physical Meetup</span>
          </div>


        </div>


        <div className='course-r'>

          <img src={img} alt="" />

          <div>
            <span className='price'>
              <span>NGN5000.00</span>
              <span className='price-slash'>NGN50000.00</span>
            </span>
            <Link to='/enroll'><button>Enroll Now</button></Link>

          </div>
          

        </div>



      </section>


    <section className='course2'>
      <div className='course2-l'>

        <div className='course2-top'>

          <h1>About the Course</h1>
          <p>Personal Effectiveness is the ability to get the most important tasks done with maximum time efficiency. Without the limitation of time, just about anyone can get any task done, but the ability to carry out high value and high priority tasks within the shortest possible time frame is one that only those who have mastered Personal Effectiveness possess.</p>

        </div>

        <div className='course2-b'>

          <h4>Course Content</h4>
       

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>
          <div className="btn">
            <button>Download full curriculum</button>
          </div>
          
        </div>

      </div>

      <div className='course2-r'>


          <ReactPlayer ref={playerRef} width='100%' height='300px' url={VIDEO_PATH} controls={true} playing={true} muted  className='video' style={{width:'50px'}}/>

          <div>
            <span className='price'>
              <span>NGN5000.00</span>
              <span className='price-slash'>NGN50000.00</span>
            </span>
            <button>Enroll Now</button>
          </div>
          

        </div>


    </section>


    <section className='illustrate'>

      <h2>All Graphic Design & Illustration courses</h2>

      <div>
        <img src={img} alt="" />
        <h3>The Art and Skill in Drawing</h3>
        <span className='span'>

          <span>4.9</span>

          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>

          <span>(13,400)</span>

        </span>
      </div>

      <div>
        <img src={img} alt="" />
        <h3>The Complete Great Design Theory</h3>
        <span className='span'>

          <span>4.9</span>

          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>

          <span>(13,400)</span>

        </span>
      </div>

      <div>
        <img src={img} alt="" />
        <h3> Great Design Master Class for Beginner</h3>
        <span className='span'>

          <span>4.9</span>

          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>

          <span>(13,400)</span>

        </span>
      </div>

    </section>

    <div className="learn">
      <h3>Graphic Design Student also learn</h3>

      <div>
        <h5>Adobe illustrator</h5>
      </div>

      <div>
        <h5>Logo Design</h5>
      </div>

      <div>
        <h5>Design Theory</h5>
      </div>

      <div>
        <h5>Vector Graphics</h5>
      </div>

      <div>
        <h5>Adobe Photoshop</h5>
      </div>

      <div>
        <h5>Corel Draw</h5>
      </div>
      
    </div>

    <Footer/>
    </div>
  )
}

export default Course