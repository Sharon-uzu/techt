import React from "react";
import Header from '../Components/Header'
import hero1 from '../../Images/course-removebg-preview.png';
import { FaEarListen, FaHandshakeSimple, FaLandmarkDome } from 'react-icons/fa6';
import { FaClock, FaComment, FaLaptop, FaPlane, FaSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import full from '../../Images/FULLSTACK BLOCKCHAIN DEVELOPMENT_040804.jpg'
import cyber from '../../Images/CYBERSECURITY IN BLOCKCHAIN_035530.jpg'
import product from '../../Images/PRODUCT DESIGN IN BLOCKCHAIN_035549.jpg'
import { FaMoneyBill } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";


const Blockchain = () => {

    

    
  return (
    <div>
        <Header/>
        <section className='block-hero'>
            <div className='b-l'>
               <div>
                <h2>BlockChain Academy</h2>
                <p>Welcome to Techtan's Blockchain Academy, your gateway to mastering the revolutionary technology of blockchain. At our academy, we offer comprehensive training programs designed to equip individuals with the knowledge, skills, and expertise needed to thrive in the blockchain industry.</p>
                <a href="#more"><button>Learn More</button></a>
               </div>
               <img src={hero1} alt="" className="c-p-img"/>
            </div>
        </section>

        <section className='block1' id="more">
            <div className='block1-l'>
                <h3>BlockChain <span>Academy</span></h3>
                <p>Led by industry experts and experienced instructors, our curriculum covers a wide range of topics including blockchain fundamentals, smart contracts, decentralized applications (DApps), cryptocurrency, and more. Through hands-on projects, practical exercises, and real-world case studies, students gain valuable insights and practical experience in working with blockchain technologies.</p>

                <p>At Techtan's Blockchain Academy, we are committed to fostering a dynamic learning environment where creativity, collaboration, and innovation thrive. </p>

                <Link to='/blockchainenroll' style={{cursor:'pointer'}}><button style={{cursor:'pointer'}}>Join Us Now</button></Link>
            </div>

            <div className='block1-r'>
                <div className="b-c-h">
                    <h3>Our Four Pillars</h3>
                    <p>At Techtan's Blockchain Academy, our foundation rests on four pillars that drive our mission and define our commitment to excellence in blockchain education:</p>
                </div>
                <div className='b-c'>
                    <div style={{backgroundColor:'rgb(35, 189, 238)'}}>
                        <FaHandshakeSimple/>
                    </div>
                    <h4> Expert Instructors</h4>
                    <p>Learn from industry professionals passionate about blockchain education.</p>
                </div>

                <div className='b-c'>
                    <div style={{backgroundColor:'rgb(243, 97, 123)'}}>
                        <FaLaptop/>
                    </div>
                    <h4>Cutting-Edge Curriculum</h4>
                    <p>Stay updated with the latest blockchain technologies and innovations.</p>
                </div>


                <div className='b-c'>
                    <div style={{backgroundColor:'#3F934D'}}>
                        <FaClock/>
                    </div>
                    <h4>Personalized Support</h4>
                    <p>Receive tailored guidance and mentorship throughout your learning journey.</p>
                </div>


                <div className='b-c'>
                    <div style={{backgroundColor:'rgb(255, 86, 28)'}}>
                        <FaComment/>
                    </div>
                    <h4>Vibrant Community</h4>
                    <p>Engage with peers and experts to foster growth and collaboration.</p>
                </div>

            </div>

        </section>

        <section className='block2'>
            <h3>Guaranteed <span>Growth</span> in 4 steps</h3>
            <p>At Techtan's Blockchain Academy, we ensure your growth through our four-step process: We Train, We Empower, We Innovate, and You Excel. </p>

            <div className='block2-cards'>
                <div className='block2-card'>
                    <div>
                        <FaEarListen/>
                    </div>
                    <h4>We Train</h4>
                    <p>Dive into comprehensive courses taught by industry experts, covering all facets of blockchain technology and its applications. Gain the knowledge and skills needed to thrive in the blockchain industry.</p>
                </div>

                <div className='block2-card'>
                    <div>
                        <FaLandmarkDome/>
                    </div>
                    <h4>We Empower</h4>
                    <p>Receive personalized guidance and support as you navigate the complexities of blockchain development and innovation. Our mentors and resources empower you to take control of your learning journey and unlock your full potential.</p>
                </div>


                <div className='block2-card'>
                    <div>
                        <FaPlane/>
                    </div>
                    <h4>We Innovate</h4>
                    <p>Explore cutting-edge technologies and tools in our state-of-the-art learning environment. Collaborate with peers and industry professionals to brainstorm ideas, prototype solutions, and drive innovation in the blockchain space.</p>
                </div>

                <div className='block2-card'>
                    <div>
                        <FaSmile/>
                    </div>
                    <h4>You Excel</h4>
                    <p>Step into the spotlight as you apply your newfound knowledge and skills to real-world projects and challenges. With our support and guidance, you'll excel in the blockchain industry, making meaningful contributions and achieving your professional goals.</p>
                </div>


            </div>
        </section>


        <section className='courses2-page' id="courses">
            <h2>Available Courses</h2>

            <section>

                <div className='c2-info'>
                    <img src={full} alt="" />
                    <div>
                        <span>
                            <FaMoneyBill className='cs-i'/>
                            ₦600,000
                        </span>

                        <span>
                            <FaRegClock className='cs-i'/>
                            6months
                        </span>
                    </div>
                    <h3>Blockchain Development (Full-stack)</h3>
                    <p>Dive into the world of blockchain dev with our comprehensive full-stack program. From understanding the fundamentals of blockchain tech to mastering smart contract development and decentralized application (DApp) deployment, this component covers all aspects of blockchain development. Gain hands-on experience with popular blockchain platforms and tools as you build real-world projects and applications.</p>
                    <Link to='/blockchainfullstack'><button>View Course</button></Link>
                </div>

                <div className='c2-info'>
                    <img src={product} alt="" />
                    <div>
                        <span>
                            <FaMoneyBill className='cs-i'/>
                            ₦300,000
                        </span>

                        <span>
                            <FaRegClock className='cs-i'/>
                            3months
                        </span>
                    </div>
                    <h3>Product Design in Blockchain</h3>
                    <p>Explore the intersection of design and blockchain technology with our product design component. Learn how to conceptualize, prototype, and design user-friendly interfaces for blockchain-based applications and decentralized platforms. From user research to wireframing and prototyping, discover how to create engaging and intuitive user experiences that leverage the unique capabilities of blockchain technology.</p>
                    <Link to='/blockchainproduct'><button>View Course</button></Link>
                </div>

                <div className='c2-info'>
                    <img src={cyber} alt="" />
                    <div>
                        <span>
                            <FaMoneyBill className='cs-i'/>
                            ₦450,000
                        </span>

                        <span>
                            <FaRegClock className='cs-i'/>
                            5months
                        </span>
                    </div>
                    <h3>Cybersecurity in Blockchain:</h3>
                    <p>Delve into the critical field of cybersecurity within the context of blockchain technology. This component covers essential topics such as blockchain security principles, common vulnerabilities, threat modeling, and secure coding practices. Learn how to assess and mitigate security risks in blockchain systems, protect sensitive data, and ensure the integrity and confidentiality of transactions on decentralized networks.</p>
                    <Link to='/blockchaincyber'><button>View Course</button></Link>
                </div>

            </section>
        </section>

        <Footer/>


    </div>
  )
}

export default Blockchain