import React, { useEffect } from "react";
import {  useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import img from '../../Images/block.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import data from '../../Images/DATA ANALYTICS_035541.jpg'
import product from '../../Images/PRODUCT DESIGN_035551.jpg'
import web from '../../Images/WEBSITE FRONT END_035556.jpg'
import back from '../../Images/WEBSITE BACKEND_035554.jpg'
import full from '../../Images/WEBSITE FULLSTACK_035557.jpg'
import cyber from '../../Images/CYBERSECURITY_035540.jpg'
import science from '../../Images/DATA SCIENCE_035543 (1).jpg'
import digital from '../../Images/DIGITAL MARKETING_035545.jpg'
import productmgt from '../../Images/PRODUCT MANAGEMENT_035553.jpg'
import { FaMoneyBill } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import Faq from '../Components/Faq'


const Courses = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);


    const Course = [
        {
            id:1,
            name:'Product Design',
            text:'Discover the art of product design through our immersive course. Learn industry-leading techniques and earn a globally recognized certificate to launch your career in product design.',
            img:product,
            link:'/product',
            price:'₦175,000',
            period:'10-12weeks'
        },

        {
            id:2,
            name:'Digital Marketing',
            text:"Unlock the power of digital marketing with our comprehensive course. Gain practical skills and earn a globally recognized certificate to kickstart your career in digital marketing.",
            img:digital,
            link:'/marketing',
            price:'₦150,000',
            period:'12-14weeks'
        },

        {
            id:3,
            name:'Data Analytics',
            text:'Explore the realm of data analytics with our comprehensive course. Develop essential skills and earn a globally recognized certificate to embark on a rewarding career in data analytics.',
            img:data,
            link:'/data',
            price:'₦200,000',
            period:'14-16weeks'
        },

        {
            id:4,
            name:'Website Development(Frontend)',
            text:'Master frontend development with our hands-on course. Learn essential skills and earn a globally recognized certificate to become a skilled frontend developer.',
            img:web,
            link:'/web',
            price:'₦250,000',
            period:'16-17weeks'
        },

        {
            id:5,
            name:'Website Development(Backend)',
            text:'Unlock the secrets of backend development with our immersive course. Gain practical experience and earn a globally recognized certificate to excel in backend development.',
            img:back,
            link:'/backend',
            price:'₦300,000',
            period:'16-18weeks'
        },

        {
            id:6,
            name:'Fullstack Web Development',
            text:'Become a fullstack web developer with our comprehensive course. Learn both frontend and backend development, and earn a globally recognized certificate to launch your career.',
            img:full,
            link:'/fullstack',
            price:'₦500,000',
            period:'24-25weeks'
        },

        {
            id:7,
            name:'Cybersecurity',
            text:'Dive into the world of cybersecurity with our intensive course. Learn cutting-edge techniques and earn a globally recognized certificate to become a cybersecurity expert.',
            img:cyber,
            link:'/cybersecurity',
            price:'₦250,000',
            period:'14-16weeks'
        },

        {
            id:8,
            name:'Product Management',
            text:'Master the essentials of product management with our dynamic course. Gain hands-on experience and earn a globally recognized certificate to excel in product management roles.',
            img:productmgt,
            link:'/product-mgt',
            price:'₦175,000',
            period:'10-12weeks'
        },

        {
            id:9,
            name:'Data Science',
            text:'Delve into the field of data science with our in-depth course. Gain practical knowledge and earn a globally recognized certificate to become a proficient data scientist.',
            img:science,
            link:'/datascience',
            price:'₦350,000',
            period:'22-24weeks'
        },
    ]

  return (
    <div>
        <Header/>

        <section className='courses-page1'>
            <div>
                <h2>TECH LIVES HERE</h2>
                <p>Welcome to Techtan, where innovation thrives and technology reigns supreme. In our dynamic ecosystem, tech isn't just a tool – it's a way of life.</p>
                <p>Our courses are meticulously crafted to blend standard industry practices with exceptional innovation, ensuring you receive nothing short of excellence in every aspect of your tech journey. Embrace the extraordinary; embrace Techtan.</p>
                <p>Explore our courses and discover how technology truly lives here.</p>
            </div>

            <div  className="c-p-img c-p-img2">
                <img src={img} alt="" />
            </div>
        </section>

        <section className='courses2-page'>
            <h2>Available Courses</h2>
        

            <section>



                {
                    Course.map((course) =>{

                        return(

                            <div className='c2-info'>
                                <img src={course.img} alt="" />
                                <div>
                                    <span>
                                        <FaMoneyBill className='cs-i'/>
                                        {course.price}
                                    </span>
            
                                    <span>
                                        <FaRegClock className='cs-i'/>
                                        {course.period}
                                    </span>
                                </div>
                                <h3>{course.name}</h3>
                                <p>{course.text}</p>
                                <Link to={course.link}><button>View Course</button></Link>
                        </div>

                        )
                            
                })
                    
                }

            </section>
        </section>

        <Faq/>

        <Footer/>
        
    </div>
  )
}

export default Courses