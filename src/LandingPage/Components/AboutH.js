import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
import img from '../../Images/h-img.png'
import img1 from '../../Images/Frame 1028.png'

const AboutH = () => {
  return (
    <div>
        <div className="about-h">
            <div>
                <h2>About Us</h2>
                <p>At Techtan, we understand that the digital landscape is ever-evolving, and navigating it can be daunting. That's why we've created a tech hub designed to empower individuals with the skills and knowledge needed to thrive in today's digital era. We provide top-notch tech education in a clean, calm, and classy atmosphere. We believe that learning should be an enriching experience, which is why we've curated a team of expert instructors who are passionate about sharing their knowledge and guiding learners through their tech journey with personalized attention and support.</p>
                <p> When you step into Techtan, you'll find yourself immersed in a vibrant community of like-minded individuals, all on a quest to unlock their full potential in the world of technology. Whether you're looking to upskill, switch careers, or simply expand your horizons, Techtan is here to support you every step of the way.</p>
                <Link to='/contact'>Let's create something together</Link>
            </div>

            <div className='r'>
                <img src={img} alt="" className='ab1'/>
                <img src={img1} alt=""  className='ab2'/>
            </div>
        </div>
    </div>
  )
}

export default AboutH