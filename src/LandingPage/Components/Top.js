import React from 'react'
import vector from '../../Images/Vector 1.png'
import { MdDesignServices } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { MdOutlineWebhook } from "react-icons/md";
import { PiCodeSimpleBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { LuAlignVerticalJustifyStart } from "react-icons/lu";



const Top = () => {
  return (
    <div>
        <div className="baet">
            <div className="dk"></div>
            <Link to='/baet'><button>Apply Now</button></Link>
        </div>
        <div className="abt exp">
            <h2>Explore Top Courses</h2>
            <img src={vector} alt=""  className='v1'/>

            <section className='top'>

                <Link to='/product'>

                    <PiCodeSimpleBold  className='t-icon'/>
                    <h3>Product Design</h3>
                    <p>10 - 12 Weeks <span style={{fontWeight:800}}>| ₦175,000</span> </p>
                </Link>

                <Link to='/marketing'>
                    <MdOutlineAppSettingsAlt className='t-icon'/>
                    <h3> Digital Marketing</h3>
                    <p>12 - 14 Weeks <span style={{fontWeight:800}}>| ₦150,000</span></p>
                </Link>

                <Link to='/data'>
                    <FaDatabase className='t-icon'/>
                    <h3>Data Analytics </h3>
                    <p>14 - 16 Weeks <span style={{fontWeight:800}}>| ₦200,000</span></p>
                </Link>


                <Link to='/web'>
                    <FaLaptopCode  className='t-icon'/>
                    <h3>Website (Frontend) Development </h3>
                    <p>16 - 17 Weeks <span style={{fontWeight:800}}>| ₦250,000</span></p>
                </Link>


                <Link to='/backend'>
                    <FaLaptopCode  className='t-icon'/>
                    <h3>Website (Backend) Development </h3>
                    <p>16 - 18 Weeks <span style={{fontWeight:800}}>| ₦300,000</span></p>
                </Link>


                

                <Link to='/fullstack'>
                    <FaLaptopCode  className='t-icon'/>
                    <h3>Website (Fullstack) Development </h3>
                    <p>24 - 25 Weeks <span style={{fontWeight:800}}>| ₦500,000</span></p>
                </Link>


                <Link to='/cybersecurity'>
                    <MdOutlineWebhook  className='t-icon'/>
                    <h3>Cybersecurity</h3>
                    <p>14 - 16 Weeks <span style={{fontWeight:800}}>| ₦250,000</span></p>
                </Link>

                <Link to='/product-mgt'>
                    <AiFillProject  className='t-icon'/>
                    <h3>Product Management </h3>
                    <p>10 - 12 Weeks <span style={{fontWeight:800}}>| ₦175,000</span></p>
                </Link>


                <Link to='/datascience'>
                    <LuAlignVerticalJustifyStart  className='t-icon'/>
                    <h3>Data Science</h3>
                    <p>22 - 24 Weeks <span style={{fontWeight:800}}>| ₦350,000</span></p>
                </Link>

            </section>


        </div>
    </div>
  )
}

export default Top