import React, {useState} from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

import { IoIosArrowDropup } from "react-icons/io";

const Faq = () => {

  const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);

  const [ans4, setAns4] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [ans5, setAns5] = useState(false);
  const [open5, setOpen5] = useState(true);

  const [ans6, setAns6] = useState(false);
  const [open6, setOpen6] = useState(true);

  const [ans7, setAns7] = useState(false);
  const [open7, setOpen7] = useState(true);

  const [ans8, setAns8] = useState(false);
  const [open8, setOpen8] = useState(true);


  const [ans9, setAns9] = useState(false);
  const [open9, setOpen9] = useState(true);

  const click = () => {
    setAns(true);
    setOpen(false);
  }

  const clickRev = () => {
    setAns(false);
    setOpen(true);
  }

  const click1 = () => {
    setAns1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setAns1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setAns2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setAns2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setAns3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setAns3(false);
    setOpen3(true);
  }

  const click4 = () => {
    setAns4(true);
    setOpen4(false);
  }

  const clickRev4 = () => {
    setAns4(false);
    setOpen4(true);
  }

  const click5 = () => {
    setAns5(true);
    setOpen5(false);
  }

  const clickRev5 = () => {
    setAns5(false);
    setOpen5(true);
  }


  const click6 = () => {
    setAns6(true);
    setOpen6(false);
  }

  const clickRev6 = () => {
    setAns6(false);
    setOpen6(true);
  }

  const click7 = () => {
    setAns7(true);
    setOpen7(false);
  }

  const clickRev7 = () => {
    setAns7(false);
    setOpen7(true);
  }

  const click8 = () => {
    setAns8(true);
    setOpen8(false);
  }

  const clickRev8 = () => {
    setAns8(false);
    setOpen8(true);
  }

  const click9 = () => {
    setAns9(true);
    setOpen9(false);
  }

  const clickRev9 = () => {
    setAns9(false);
    setOpen9(true);
  }



  return (
    <div id='faq' className='faqs'>
        <h1>HAVE ADDITIONAL QUESTIONS?</h1>

        {/* <p>Learn more about us</p> */}

        <div className='w-r'>
                    <div className="ques">

                    <div>
                            {
                                open ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev}/>

                            }
                        
                        </div>
                        

                        <div>
                            <h4>What is Techtan?</h4>

                            {  ans ? (
                                <p>Techtan is a premier tech hub designed to provide tailored tech training programs for grownups, working-class professionals, and individuals seeking to enhance their tech skills in a clean, calm, and classy environment.
                                </p>
                                ):null
                            }
                        
                        </div>


                        

                    

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open1 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click1}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev1}/>

                        }
                        
                        </div>

                        <div>
                        <h4>What types of tech training programs does Techtan offer?</h4>

                        {  ans1 ? (
                            <p>Techtan offers a wide range of tech training programs covering various topics such as coding, data analysis, cybersecurity, digital marketing, artificial intelligence, and more. Our programs are designed to meet the specific needs and aspirations of our clientele.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open2 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click2}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev2}/>

                        }
                        
                        </div>

                        <div>
                        <h4>Who are the instructors at Techtan?</h4>

                        {  ans2 ? (
                            <p>The instructors at Techtan are industry professionals with extensive experience and expertise in their respective fields. They are passionate about sharing their knowledge and guiding learners through their tech journey with personalized attention and support.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>




                    <div className="ques">

                        <div>
                          {
                              open3 ? (
                              <IoIosArrowDropdown className='arr-icon' onClick={click3}/>

                              ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev3}/>

                          }
                        
                        </div>

                        <div>
                          <h4>Is Techtan suitable for beginners with no prior tech experience?</h4>

                          {  ans3 ? (
                              <p>Yes, absolutely! Techtan welcomes learners of all skill levels, including beginners with no prior tech experience. Our training programs are designed to accommodate learners at various stages of their tech journey, providing the necessary support and guidance to help them succeed.</p>
                              ):null
                          }
                        
                        </div>

                        

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open4 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click4}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev4}/>

                            }
                        
                        </div>

                        <div>
                            <h4>Can Techtan provide customized training programs for businesses and organizations?</h4>

                            {  ans4 ? (
                                <p>Yes, Techtan offers customized tech training solutions for corporations and organizations looking to upskill their workforce. Our corporate training programs are tailored to address the specific needs and requirements of each organization, delivering relevant and practical tech education to enhance productivity and innovation.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open5 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click5}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev5}/>

                            }
                        
                          </div>

                        <div>
                            <h4>How can I enroll in a tech training program at Techtan?</h4>

                            {  ans5 ? (
                                <p>To enroll in a tech training program at Techtan, simply visit our website and browse through the available courses. Once you've selected a program that suits your needs, you can easily enroll online or contact us for further assistance.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>


                    <div className="ques">
                        <div>
                            {
                                open6 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click6}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev6}/>

                            }
                        
                          </div>

                        <div>
                            <h4>Does Techtan provide technical support services?</h4>

                            {  ans6 ? (
                                <p>Yes, Techtan offers reliable technical support services to assist individuals and businesses with troubleshooting, problem-solving, and resolving tech-related issues. Our team of skilled technicians is here to provide prompt and efficient support, ensuring minimal disruption to your operations.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>



                    <div className="ques">
                        <div>
                            {
                                open7 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click7}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev7}/>

                            }
                        
                          </div>

                        <div>
                            <h4>Are there networking opportunities available at Techtan?</h4>

                            {  ans7 ? (
                                <p>Yes, Techtan organizes regular networking events, community gatherings, and collaborative projects where our clients can connect with like-minded peers, industry experts, and potential mentors. These networking opportunities provide invaluable support, inspiration, and opportunities for growth.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open8 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click8}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev8}/>

                            }
                        
                          </div>

                        <div>
                            <h4>Can I schedule tech training sessions at convenient times?</h4>

                            {  ans8 ? (
                                <p>Yes, Techtan offers flexible scheduling options for tech training sessions to accommodate the busy lifestyles of our clients. Whether you prefer daytime, evening, or weekend sessions, we strive to make learning accessible and convenient for you.
                                </p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>


                    <div className="ques">
                        <div>
                            {
                                open9 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click9}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev9}/>

                            }
                        
                          </div>

                        <div>
                            <h4>Is Techtan suitable for remote learning?</h4>

                            {  ans9 ? (
                                <p> Yes, Techtan offers remote learning options for individuals who prefer to learn from the comfort of their own space. Our online courses provide the same high-quality instruction and support as our in-person programs, allowing you to pursue your tech education goals from anywhere in the world.
                                </p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>
                    

                  </div>
              </div>
  )
}

export default Faq