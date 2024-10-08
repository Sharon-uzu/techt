import React from 'react'
import { RiBookOpenLine } from "react-icons/ri";
import vector from '../../Images/Vector 1.png'
import { LuUsers } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { GrShieldSecurity } from "react-icons/gr";
import frame from '../../Images/Frame 1104.png'


const Why = () => {
  return (
    <div >
        
        <div className="abt">
            <h2>Why Techtan</h2>
            <img src={vector} alt=""  className='v1'/>

            <div className="why-t">

                <img src={frame} alt=""  className='frame'/>
                <img src={frame} alt=""  className='frame1'/>

                <section className='why'>

                    <div>
                        <RiBookOpenLine className='w-icon'/>
                        <h3>Industry-Relevant Curriculum</h3>
                        <p>We ensure that our curriculum is up-to-date and relevant to the ever-evolving tech landscape, empowering our learners with the skills and knowledge needed to succeed in today's digital world.</p>

                    </div>

                    <div>
                        <LuUsers className='w-icon'/>
                        <h3>Expert <br /> Instructors</h3>
                        <p>Our team of experienced instructors consists of industry experts who are passionate about sharing their knowledge and guiding learners through their tech journey with personalized attention and support.</p>

                    </div>

                    <div>
                        <CiClock2 className='w-icon'/>
                        <h3>Flexibility and Convenience</h3>
                        <p>With customized schedules and a variety of course offerings, Techtan makes tech education accessible and convenient for individuals with busy lifestyles, allowing them to pursue their learning goals on their terms.</p>

                    </div>

                    <div>
                        <GrShieldSecurity className='w-icon'/>
                        <h3>Classy Learning Environment</h3>
                        <p>At Techtan, we believe that the environment plays a crucial role in learning. Our state-of-the-art facilities provide a clean, calm, and classy atmosphere conducive to focused learning and growth.</p>

                    </div>

                </section>

            </div>


        </div>
    </div>
  )
}

export default Why