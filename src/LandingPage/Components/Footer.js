import React from 'react'
import flogo from '../../Images/logo.png'
import arr from '../../Images/arr.png'

const Footer = () => {
  return (
    <div>
        <footer>
            <section>
                <div className='lg'>
                    <img src={flogo} alt="" />
                </div>

                <div>
                    <h5>Our Services</h5>
                    <p> Training</p>
                    <p>Consultancy</p>
                    <p>Tech Off-shoring</p>
                    <p>Technical Support</p>
                    <p>BlockChain Academy</p>
                </div>

                <div>
                    <h5>Courses</h5>
                    <p> Data Analytics</p>
                    <p>Product Design</p>
                    <p>Web Development</p>
                    <p>Graphics Design</p>
                    <p>Digital Marketing</p>
                </div>

                <div>
                    <h5>Events</h5>
                 
                    <p>TechTalk</p>
                    <p>Founders TimeOut</p>
                    
                </div>

                <div className='form'>
                    <h5>Contact</h5>
                    <a href="mailto:hello@mytechtan.com">hello@mytechtan.com</a>
                    <a href="tel:07040789774">07040789774</a> <br />

                    {/* <h5>Get latest information on our training </h5>
                    <form className='f-form'>
                        <input type="email" placeholder='Email Address'/>
                        <button type="submit">
                            <img src={arr} alt="" />
                        </button>
                    </form> */}
                    <h5>Office Address</h5>
                    <p>No. 7 Umuechem Street, Dline, Behind Energymatic Filling Station, Olu Obasanjo, PH.</p>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer