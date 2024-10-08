import React, {useState} from 'react'
import { MdOnDeviceTraining } from "react-icons/md";
import { BsClipboardDataFill } from "react-icons/bs";
import { SiInternetarchive } from "react-icons/si";
import { MdBackupTable } from "react-icons/md";
import Modal from "react-modal";


const Serve = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const toggleModal2 = () => {
      setIsModalOpen2(!isModalOpen2);
    };


    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const toggleModal3 = () => {
      setIsModalOpen3(!isModalOpen3);
    };

  return (
    <div>
        <div className="serves">
            <h3>Services</h3>

            <div onClick={toggleModal}>
                <MdOnDeviceTraining className='s-i'/>
                <p>Trainings </p>
            </div>

            <div onClick={toggleModal1}>
                <BsClipboardDataFill className='s-i'/>
                <p>Consultancy</p>
            </div>

            <div onClick={toggleModal2}>
                <SiInternetarchive className='s-i'/>
                <p>Tech Off-shoring</p>
            </div>


            <div onClick={toggleModal3}>
                <MdBackupTable className='s-i'/>
                <p>Technical Support</p>
            </div>

        </div>

        {/* FIRST MODAL */}


        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <h2>Trainings</h2>
                <p>Elevate your tech skills with our tailored training programs. From coding to cybersecurity, we offer hands-on learning experiences designed to empower you in the digital age.</p>

              </div>

            </div>
            
          </Modal>


            {/* SECOND MODAL */}


            <Modal
                isOpen={isModalOpen1}
                onRequestClose={toggleModal1}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{ 
                overlay: {
                    position: "fixed",
                    top: "0",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "hsla(0, 0%, 0%, .8)",
                    zIndex:100000,
                    
                },
                }}
            >
                <div className='modal1'>
                <div className='modal1-content'>
                    <div className='close'>
                    <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                    </div>

                    <h2>Consultancy</h2>
                    <p>Gain strategic insights and guidance from our tech experts. Our consultancy services help businesses navigate the tech landscape, optimize processes, and drive innovation for sustainable growth.</p>

                </div>

                </div>
                
            </Modal>


            {/* THIRD MODAL */}


            <Modal
                isOpen={isModalOpen2}
                onRequestClose={toggleModal2}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{ 
                overlay: {
                    position: "fixed",
                    top: "0",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "hsla(0, 0%, 0%, .8)",
                    zIndex:100000,
                    
                },
                }}
            >
                <div className='modal1'>
                <div className='modal1-content'>
                    <div className='close'>
                    <button onClick={() => setIsModalOpen2(false)} style={{cursor:'pointer'}}>X</button>
                    </div>

                    <h2>Tech Off-Shoring</h2>
                    <p>Leverage our offshore tech solutions to streamline operations and reduce costs. Our offshore teams deliver high-quality tech services, allowing you to focus on core business priorities with peace of mind. We also help companies setup and supervise tech-based off-shore companies.</p>

                </div>

                </div>
                
            </Modal>


            {/* FOURTH MODAL */}


            <Modal
                isOpen={isModalOpen3}
                onRequestClose={toggleModal3}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{ 
                overlay: {
                    position: "fixed",
                    top: "0",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "hsla(0, 0%, 0%, .8)",
                    zIndex:100000,
                    
                },
                }}
            >
                <div className='modal1'>
                <div className='modal1-content'>
                    <div className='close'>
                    <button onClick={() => setIsModalOpen3(false)} style={{cursor:'pointer'}}>X</button>
                    </div>

                    <h2>Technical Support</h2>
                    <p>Trust our skilled technicians to resolve your tech issues promptly and efficiently. From troubleshooting to maintenance, our technical support services ensure smooth operations and uninterrupted productivity for your business.</p>

                </div>

                </div>
                
            </Modal>

    </div>
  )
}

export default Serve