import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hero1 from '../../Images/h-img.png';
import hero2 from '../../Images/h2.png'
import { Link } from 'react-router-dom'
import heror from '../../Images/Frame 1028.png'



const Hero = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 710 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 710, min: 0 },
      items: 1
    }
  };
  return (
    <div className='h-r'>
      <Carousel className='hero'
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >

      <div className='hero-c'>

        <div className='h-l hero-l'>
          <h2>Achieve Your Tech Dream</h2>
          <h4>Let’s make your aspirations a reality together.  </h4>
          <button><Link to='/about'>Learn More</Link></button>
        </div>

        <div className='h-r'>
          
          <img src={hero1} className='abs-img img1' alt=''/>
          <img src={heror} className='abs-img img2' alt=''/>
        </div>

      </div>



      <div className='hero-c'>

        <div className='h-l hero-l'>
          <h2>Achieve Your Tech Dream</h2>
          <h4>Discover your tech super powers at Techtan.  </h4>
          <button><Link to='/about'>Learn More</Link></button>
        </div>

        <div className='h-r'>
          <img src={hero2} className='abs-img' alt=''/>
        </div>

      </div>


     

      </Carousel>
      
    </div>
  )
}

export default Hero