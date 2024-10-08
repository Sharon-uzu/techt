import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../Images/logo.png'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    // document.body.classList.toggle('no-scroll', !click);
    // document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };


  return (
    <div>
      <header>
        <nav>
          <div className="logo">
          <Link to='/'><img src={logo} alt="" /></Link>
          </div>

          <div className='bars' onClick={handleClick}>
            {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
          </div>

          <ul className={click ? 'active' : 'menu'}>
            <li><NavLink to='/' activeclassName = 'active' onClick={closeMenuBar}>Home</NavLink></li>
            <li><NavLink to='/about' activeclassName = 'active' onClick={closeMenuBar}>About</NavLink></li>
            <li><NavLink to='/baet' activeclassName = 'active' onClick={closeMenuBar}>BAET</NavLink></li>
            <li><NavLink to='/courses' activeclassName = 'active' onClick={closeMenuBar}>Courses</NavLink></li>
            <li><NavLink to='/blockchain' activeclassName = 'active' onClick={closeMenuBar}>Blockchain Academy</NavLink></li>
            <li><NavLink to='/contact' activeclassName = 'active' onClick={closeMenuBar}>Contact Us</NavLink></li>
            <li className='enroll'><NavLink to='/enroll' activeclassName = 'active' style={{color:'#fff'}} onClick={closeMenuBar}>Enroll</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header