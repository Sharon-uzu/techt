import React from 'react'
import vector from '../../Images/Vector 1.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Images/mathew.jpeg'
import img1 from '../../Images/rose.jpeg'
import img2 from '../../Images/george.jpeg'


const Testimony = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 710 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 710, min: 0 },
          items: 1
        }
      };
  return (
    <div>
        <div className="abt exp">
            <h2>What They Say About Us</h2>
            <img src={vector} alt=""  className='v1'/>

                <Carousel className='test'
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >

                    <div>
                        <img src={img} alt="" />
                        <p>Stepping into Techtan felt like entering a realm of innovation and tranquility. The sleek, modern design of the office coupled with its serene ambiance creates the perfect environment for focused learning and collaboration. Techtan truly sets the standard for tech hubs.</p>
                        <h4>Matthew Okechukwu</h4>
                    </div>

                    <div>
                        <img src={img1} alt="" />
                        <p>Techtan's office space is simply breathtaking! From the moment I walked in, I was captivated by the elegant architecture and stylish decor. The vibrant yet comfortable atmosphere makes it an ideal place for professionals to thrive and grow in their tech journey.</p>
                        <h4>Roseline Chioma Amete</h4>
                        {/* <h6>UI/UX Designer</h6> */}
                    </div>

                    <div>
                        <img src={img2} alt="" />
                        <p>I was blown away by the beauty and functionality of Techtan's office space. The attention to detail in every aspect of the design, from the spacious work areas to the cozy breakout zones, is truly impressive. It's a space where creativity flourishes and ideas come to life.</p>
                        <h4>Orji George Akunna</h4>
                    </div>

                    {/* <div>
                        <img src={img1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                    <div>
                        <img src={img} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                    <div>
                        <img src={img1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div> */}

                </Carousel>


        </div>
    </div>
  )
}

export default Testimony