import React from 'react'
import vector from '../../Images/Vector 1.png'
import h1 from '../../Images/TT_1.JPG'
import h2 from '../../Images/TT_9.JPG'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
        <div className="abt">
            <h2>About Us</h2>
            <img src={vector} alt="vector"  className='v1'/>

            <div className='hero-c'>

                <div className='h-l'>
                <h2>Raising World-Class Techies at Techtan</h2>
                <p>Welcome to Techtan, where sophistication meets technology in a space tailored for grownups, working-class professionals, and individuals who value standard trainings and a refined learning environment.</p>
                <button><Link to='/about'>Learn More</Link></button>
                </div>

                <div className='abt-img'>
                
                <img src={h1} className='img' alt=''/>
                <img src={h2} alt='' className='abs'/>
                </div>

            </div>


        </div>
    </div>
  )
}

export default About