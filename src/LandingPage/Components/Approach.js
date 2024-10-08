import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";



const Approach = () => {
  return (
    <div className='approach'>
        <h1>All-In-One</h1>
        <h1>Tech Place</h1>
        <p className='para'>We crafted Techtan to be your one-stop hub for every thing tech; JUST FOR YOU.</p>
        <section>
            <div>
                <div className='span'><FaLaptopCode className='a-i'/></div>
                <h4>Training</h4>
                <p>We start by providing you standard and world class tech training that matches your goals and aspiration.</p>
            </div>

            <div>
                <div className='span'><FaMicroscope className='a-i'/></div>
                <h4>Event</h4>
                <p>Then, we bring you to tech events to enable you gain more exposure, connect with like minds and explore.</p>
            </div>

            <div>
                <div className='span'><FaWarehouse className='a-i'/></div>
                <h4>Community</h4>
                <p>And of course, give you access to the Techtan community to also explore endless opportunities.</p>
            </div>


        </section>
    </div>
  )
}

export default Approach