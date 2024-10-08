import React from 'react'
import { GiArchiveResearch } from "react-icons/gi";
import { MdDeveloperBoard } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import help from '../../Images/help.webp'

const Help = () => {
  return (
    <div>
        <section className='help'>

            <div className='help-c'>

                <img src={help} alt="" />

                <div className='help-r'>
                    <h6>TECHTAN</h6>
                    <h3>How We Can Help You</h3>

                    <div className='help-flex'>
                        <span  style={{backgroundColor:'#3F934D'}}>
                            <GiArchiveResearch className='help-i'/>
                        </span>
                        
                        <div>
                            <h4>Personalized Tech Guidance</h4>
                            <ul>
                                <li>Receive personalized consultations to identify your tech goals and interests.</li>
                                <li>Get tailored recommendations on the best tech skills and training programs for your aspirations.</li>
                                <li>Gain clarity and direction to embark on your tech journey with confidence.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='help-flex'>

                        <span style={{backgroundColor:'crimson'}}>
                            <MdDeveloperBoard className='help-i'/>
                        </span>
                        
                        <div>
                            <h4>Comprehensive Training Programs</h4>
                            <ul>
                                <li>Explore a wide range of tech training programs covering diverse topics and skill levels</li>
                                <li>Experience hands-on learning with industry-relevant curriculum and cutting-edge tools.</li>
                                <li>Access flexible scheduling options to accommodate your busy lifestyle and learning preferences.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='help-flex'>
                        <span  style={{backgroundColor:'#536BEC'}}>
                            <MdOutlineSupportAgent className='help-i'/>
                        </span>
                        
                        <div>
                            <h4>Ongoing Support and Resources</h4>
                            <ul>
                                <li>Receive continuous support throughout your tech education journey and beyond.</li>
                                <li>Access to post-training resources, job placement assistance, and alumni networks.</li>
                                <li>Stay connected with the Techtan community for networking opportunities, collaboration, and professional development.</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </div>
  )
}

export default Help