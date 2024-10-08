import React from 'react'
import vi from '../../Images/vision.avif'
import mi from '../../Images/mission.avif'
import { Link } from 'react-router-dom'

const VM = () => {
  return (
    <div>
        <section className='vm'>
            <div className='vision'>

                <img src={vi} alt="" />
                <div>

                    <h2>Our Mission</h2>
                    <p>Empowering individuals with tailored tech education in a sophisticated environment. We foster excellence, integrity, and empowerment, guiding learners to thrive in the digital era with personalized attention and industry expertise.</p>
                    <Link to="/contact"><button>Contact Us</button></Link>

                </div>

        

            </div>


            <div className='vision mission'>


                <div>

                    <h2>Our Vision</h2>
                    <p>To be the premier destination for classy tech education, inspiring lifelong learners to unlock their full potential and lead with confidence in the ever-evolving world of technology.</p>
                    <Link to="/contact"><button>Contact Us</button></Link>
                </div>

                <img src={mi} alt="" />

            </div>
        </section>
    </div>
  )
}

export default VM