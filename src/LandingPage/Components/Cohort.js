import React from 'react'
import vector from "../../Images/Vector 1.png";
import { Link } from 'react-router-dom';


const Cohort = () => {
  return (
    <div className='enrollment'>
        <div className="form">
            
            <h3>Upcoming Cohort</h3>
          <img src={vector} alt="" />

          <div className="batch">
            <div
              className="div"
            
            >
              <h5>Cohort 1</h5>
              <p>Classes Begin: 1st November, 2024</p>
              <Link  to='/enroll'><button
                type="button"
                
              >
                Select
              </button></Link>

            </div>

            <div
              className="div"
              
            >
              <h5>Cohort 2</h5>
              <p>Classes Begin: 13th January, 2025</p>
              <Link to='/enroll'><button
                type="button"
                
              >
                Select
              </button></Link>

            </div>

            <div
              className="div"
            
            >
              <h5>Cohort 3</h5>
              <p>Classes Begin: 1st March, 2025</p>
              <Link to='/enroll'><button
                type="button"
                
              >
                Select
              </button></Link>

            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cohort