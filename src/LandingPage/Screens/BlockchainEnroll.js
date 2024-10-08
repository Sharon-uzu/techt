import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import vector from "../../Images/Vector 1.png";
import Modal from "react-modal";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Supabase } from "../../config/supabase-config";
import { Link, useNavigate } from "react-router-dom";
import { usePaystackPayment, PaystackButton } from "react-paystack";


const BlockchainEnroll = () => {

  const [amount, setAmount] = useState(0);
  const [pay, setPay] = useState(false);
  const [courses, setCourses] = useState("");

  

  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    courses: "",
    amount: "",
    schedule: "",
    session: "",
    batch: "",
    payment:""
  };

  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const congrat = () => {
    navigate("/Congrat");
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);



  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  const config = {
    reference: new Date().getTime(),
    email: formData.email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_0ae598740dd4cbdfc0b09614de18230643765609", 
  };

  const dataBase = (e) => {
    Supabase.from("Blockchain_Enroll")
      .upsert([
        {
          fullname: formData.fullname,
          email: formData.email,
          amount: amount,
          courses:courses,
          metadata: formData,
        },
      ])
      .then((response) => {
        console.log(response);
        navigate("/");
      });
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    dataBase();
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    const selectedValue = e.target.value;
    setFormData({
      ...formData,
      amount: amount,
    });
  };

  

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto"; // Enable scrolling
  }, [pathname]);

  const [course, setCourse] = useState(true);
  const [schedule, setSchedule] = useState(false);

  const [blockchainDevelopment, setBlockchainDevelopment] = useState(false);
  const [blockchainDesign, setBlockchainDesign] = useState(false);
  const [blockchainCyber, setBlockchainCyber] = useState(false);
  const [full, setFull] = useState(false);
  const [part, setPart] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [selectedText, setSelectedText] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");


  const handlepaymentPlanChange = (event) => {
    let payment_plan = event.target.value;
    setAmountBasedOnpaymentPlan(selectedCourse, payment_plan);
    console.log(payment_plan);
    setFormData({
      ...formData,
      payment: payment_plan, // Update payment option in form data
    });
    
  }

  const handleSelectChange = (event) => {
    setSelectedText(event.target.selectedOptions[0].textContent);
    // const selectedValue = event.target.value;
    const selectedPayment = formData.payment;

    const selectedValue = event.target.value;
    setSelectedCourse(selectedValue);

    // setFormData({
    //   ...formData,
    //   course: selectedValue,
    // });

    // if (selectedValue !== "") {
    //   setIsModalOpen(!isModalOpen);
    //   setAmount("00.00");
    // }

    // Set showComponent1 and showComponent2 based on the selected option
    setBlockchainDevelopment(selectedValue === "blockchain-development");
    setBlockchainDesign(selectedValue === "blockchain-productdesign");
    setBlockchainCyber(selectedValue === "blockchain-cybersecurity");
    setFull(selectedPayment === "full");
    setPart(selectedPayment === "part");
    setCourses(event.target.value)

    setAmountBasedOnpaymentPlan(selectedValue, selectedPayment);

    setFormData({
      ...formData,
      amount: amount,
      course: selectedValue,
    });
    

    
  };

  function setAmountBasedOnpaymentPlan(selectedValue, selectedPayment){
    if (selectedValue === "blockchain-development" && selectedPayment === "full") {
      setAmount(600000);
      setIsModalOpen(!isModalOpen);
    } if (selectedValue === "blockchain-development" && selectedPayment === "part") {
      setAmount(300000);
      setIsModalOpen(!isModalOpen);
    } else if (selectedValue === "blockchain-productdesign" && selectedPayment === "full") {
      setAmount(300000);
      setIsModalOpen(!isModalOpen);
    }else if (selectedValue === "blockchain-productdesign" && selectedPayment === "part") {
      setAmount(150000);
      setIsModalOpen(!isModalOpen);
    } else if (selectedValue === "blockchain-cybersecurity" && selectedPayment === "full") {
      setAmount(450000);
      setIsModalOpen(!isModalOpen);
    } else if (selectedValue === "blockchain-cybersecurity" && selectedPayment === "part") {
      setAmount(225000);
      setIsModalOpen(!isModalOpen);
    } 
  }


  const handleUpload = (e) => {
    setFormData({
      ...formData,
      course: e.target.value,
    });
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function rev() {
    setIsModalOpen(false);
    setCourse(true);
    setSchedule(false);
  }

  const [blockchainDevelopmentWeekdays, setBlockchainDevelopmentWeekdays] = useState(false);
  const [blockchainDesignWeekdays, setBlockchainDesignWeekdays] = useState(false);
  const [blockchainCyberWeekdays, setBlockchainCyberWeekdays] = useState(false);
  
  const [blockchainDevelopmentWeekend, setBlockchainDevelopmentWeekend] = useState(false);
  const [blockchainDesignWeekend, setBlockchainDesignWeekend] = useState(false);
  const [blockchainCyberWeekdaysWeekend, setBlockchainCyberWeekdaysWeekend] = useState(false);


  const [scheduleText, setScheduleText] = useState("");

  const handleScheduleChange = (event) => {
    const selectedValue = event.target.value;
    setFormData({
      ...formData,
      schedule: selectedValue,
    });

    setScheduleText(event.target.selectedOptions[0].textContent);
    // setIsModalOpen(true)

    // Set showComponent1 and showComponent2 based on the selected option
    setBlockchainDevelopmentWeekdays(selectedValue === "blockchainDevelopmentWeekdays");
    setBlockchainDesignWeekdays(selectedValue === "blockchainDesignWeekdays");
    setBlockchainCyberWeekdays(selectedValue === "blockchainCyberWeekdays");
    
    setBlockchainDevelopmentWeekend(selectedValue === "blockchainDevelopmentWeekend");
    setBlockchainDesignWeekend(selectedValue === "blockchainDesignWeekend");
    setBlockchainCyberWeekdaysWeekend(selectedValue === "blockchainCyberWeekdaysWeekend");
  };

  const [clickedContent, setClickedContent] = useState("");

  const handleClick = (event) => {
    // Get the content of the clicked div
    const content = event.target.textContent;
    // Update the state with the clicked content
    setClickedContent(content);
    setIsModalOpen(false);
    setCourse(false);
    setSchedule(true);
    setDk(false);
    setFormData({
      ...formData,
      session: content,
    });
  };

  const [time1, setTime1] = useState(false);
  const [time2, setTime2] = useState(false);
  const [time3, setTime3] = useState(false);

  function activate1() {
    setTime1(true);
    setTime2(false);
    setTime3(false);
    setPay(true);
    // setCohortContent('Cohort1');
    const content = "Cohort1";
    setFormData({
      ...formData,
      batch: content,
    });
  }

  function activate2() {
    setTime2(true);
    setTime1(false);
    setTime3(false);
    setPay(true);
    const content = "Cohort2";
    setFormData({
      ...formData,
      batch: content,
    });
  }

  function activate3() {
    setTime3(true);
    setTime2(false);
    setTime1(false);
    setPay(true);
    const content = "Cohort3";
    setFormData({
      ...formData,
      batch: content,
    });
  }

  const [dk, setDk] = useState(true);

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    dataBase();
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert("You closes the payment page")
  };

  const componentProps = {
    ...config,
    text: "Pay now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
    
  }

   
  return (
    <div>
    <Header />
    <div className="enrollment">
      <h3>Enroll Section</h3>
      <div className="form">
        <label htmlFor="course">
          <p>Full Name:</p>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    fullname: e.target.value,
                  });
                }}
             
            />
          </div>

          
        </label>

        <label htmlFor="course">
          <p>Email:</p>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
              
            />
          </div>

          
        </label>

        <label htmlFor="course">
          <p>Phone:</p>
          <div>
            <input
              type="tel"
              name=""
              id=""
              placeholder="Phone Number"
              value={formData.phone}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  });
                }}
             
            />
          </div>

          
        </label>

        <label htmlFor="gender">
          <p>Gender:</p>
          <div>
            <select
              id="selectOption"
              value={formData.gender}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    gender: e.target.value,
                  });
                }}
            >
              <option value={null}>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          
        </label>

        {course ? (
          <>
            <label htmlFor="course">
              <p>Courses:</p>
              <div>
                <select id="selectOption" onChange={handleSelectChange}>
                  <option value={null}>Select Course</option>
                  <option value="blockchain-development">Blockchain Development</option>
                  <option value="blockchain-productdesign">Product Design in Blockchain</option>
                  <option value="blockchain-cybersecurity">Cybersecurity in Blockchain</option>
                  
                </select>
              </div>
            </label>
          </>
        ) : null}

            <label htmlFor="course">
                <p>Payment Plan:</p>
                <div>
                <select
                    id="payment"
                    value={formData.payment} // Bind value to form data
                    onChange={handlepaymentPlanChange}
                  >
                    <option value=''>Select payment plan</option>
                    <option value="full">Full payment</option>
                    <option value="part">Part payment</option>
                  </select>
                </div>

              </label>

        <label htmlFor="course">
          <p>Amount:</p>
          <div>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              disabled
            />
          </div>
        </label>

        

        {schedule ? (
          <>
            <section className="sche">
              <h3>Your Schedule</h3>
              <img src={vector} alt="" />

              <div className="sche-c">
                <p></p>
                <div className="schedule">
                  <h4>
                    Course: <span>{selectedText}</span>
                  </h4>
                  <h4>
                    Amount: <span>{amount}</span>
                  </h4>
                  <h4>
                    Schedule: <span>{scheduleText}</span>
                  </h4>

                  {clickedContent && (
                    <div>
                      <h4>Session:</h4>
                      {/* Output all content */}
                      <div>{clickedContent}</div>
                    </div>
                  )}

                  <h6 onClick={openModal}>
                    <i>Change</i>
                  </h6>
                </div>
              </div>
            </section>
          </>
        ) : null}

        <h3>Select Batch</h3>
        <img src={vector} alt="" />

        <section className="batch b-batch" aria-disabled>
          <div
            className="div"
            style={{
              backgroundColor: time1 ? "#232B58" : "#fff",
              color: time1 ? "#fff" : "#000",
            }}
          >
            <h5>Cohort 1</h5>
            <p>Classes Begin: 1st October, 2024</p>
            <button
              type="button"
              onClick={() => {
                activate1();
              }}
            >
              Select
            </button>

            {dk ? <div className="dk"></div> : null}
          </div>

          <div
            className="div"
            style={{
              backgroundColor: time2 ? "#232B58" : "#fff",
              color: time2 ? "#fff" : "#000",
            }}
          >
            <h5>Cohort 2</h5>
            <p>Classes Begin: 1st February, 2025</p>
            <button
              type="button"
              onClick={() => {
                activate2();
              }}
            >
              Select
            </button>

            {dk ? <div className="dk"></div> : null}
          </div>

          {/* <div
            className="div"
            style={{
              backgroundColor: time3 ? "#232B58" : "#fff",
              color: time3 ? "#fff" : "#000",
            }}
          >
            <h5>Cohort 3</h5>
            <p>Classes Begin: 1st July,2024</p>
            <button
              type="button"
              onClick={() => {
                activate3();
              }}
            >
              Select
            </button>

            {dk ? <div className="dk"></div> : null}
          </div> */}
        </section>

        {pay ? (
          <PaystackButton
            className="pay"
            onClick={() => {
              // handleFinalSubmit();
              console.log("ready to pay")
            }}
            style={{ cursor: "pointer" }}
            {...componentProps}
          />
        ) : // <button
        //   onClick={() => {
        //     handleFinalSubmit();
        //   }}
        //   className="pay"
        //   style={{ cursor: "pointer" }}
        // >
        //   Pay Now
        // </button>
        null}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Example Modal"
          className={`bg-transparnt`}
          style={{
            overlay: {
              position: "fixed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "0",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "hsla(0, 0%, 0%, .8)",
              zIndex: 100000,
            },
          }}
        >
          <div className="modal">
            <div className="modal-c">
              <div className="close">
                <button onClick={closeModal}>x</button>
              </div>

              {blockchainDevelopment ? (
                <label htmlFor="learning">
                  <p>Learning:</p>

                  <div>
                    <select onChange={handleScheduleChange}>
                      <option value="">Select schedule</option>
                      <option value="blockchainDevelopmentWeekdays">Week Days</option>
                      <option value="blockchainDevelopmentWeekend">Weekend</option>
                    </select>
                  </div>
                </label>
              ) : null}

              {blockchainDevelopmentWeekdays ? (
                <>
                  <i className="click">
                    Click on any of the boxes below to select your preferred schedule *
                  </i>

                  <section className="batch" onClick={handleClick}>
                    <div className="div">
                      <h5>Morning Session: </h5>
                      <p>
                        Monday:10am <br />
                        <br />
                        Wednessday:11am <br />
                        <br />
                        Friday:9am{" "}
                      </p>
                    </div>

                    <div className="div">
                      <h5>Afternoon Session</h5>
                      <p>
                        Monday:2pm <br />
                        <br />
                        Wednessday:2pm <br />
                        <br />
                        Friday:1pm{" "}
                      </p>
                    </div>

                    <div className="div">
                      <h5>Evening Session</h5>
                      <p>
                        Monday:4pm <br />
                        <br />
                        Wednessday:5pm <br />
                        <br />
                        Friday:4pm{" "}
                      </p>
                    </div>
                  </section>

                  <p className="arr-back" onClick={rev}>
                    <FaArrowCircleLeft /> Back{" "}
                  </p>
                </>
              ) : null}

              {blockchainDevelopmentWeekend ? (
                <>
                  <i className="click">
                  Click on any of the boxes below to select your preferred schedule *
                  </i>

                  <section className="batch" onClick={handleClick}>
                    <div className="div">
                      <h5>Morning Session: </h5>
                      <p>Saturday: 10am</p>
                    </div>

                    <div className="div">
                      <h5>Afternoon Session: </h5>
                      <p>Saturday: 1:30pm</p>
                    </div>

                    <div className="div">
                      <h5>Evening Session: </h5>
                      <p>Saturday: 4pm</p>
                    </div>
                  </section>
                </>
              ) : null}

              {/* FRONTEND */}

              {blockchainDesign ? (
                <label htmlFor="learning">
                  <p>Learning:</p>

                  <div>
                    <select onChange={handleScheduleChange}>
                      <option value="">Select schedule</option>
                      <option value="blockchainDesignWeekdays">Week Days</option>
                      <option value="blockchainDesignWeekend">Weekend</option>
                    </select>
                  </div>
                </label>
              ) : null}

              {blockchainDesignWeekdays ? (
                <>
                  <i className="click">
                  Click on any of the boxes below to select your preferred schedule *
                  </i>

                  <section className="batch" onClick={handleClick}>
                    <div className="div">
                      <h5>Morning Session: </h5>
                      <p>
                        Monday:10am <br />
                        <br />
                        Tuesday:11am <br />
                        <br />
                        Thursday:9am{" "}
                      </p>
                    </div>

                    <div className="div">
                      <h5>Afternoon Session</h5>
                      <p>
                        Monday:2pm <br />
                        <br />
                        Tuessday:2pm <br />
                        <br />
                        Thursday:1pm{" "}
                      </p>
                    </div>

                    <div className="div">
                      <h5>Evening Session</h5>
                      <p>
                        Monday:4pm <br />
                        <br />
                        Tuesday:5pm <br />
                        <br />
                        Thursday:4pm{" "}
                      </p>
                    </div>
                  </section>

                  <p className="arr-back" onClick={rev}>
                    <FaArrowCircleLeft /> Back{" "}
                  </p>
                </>
              ) : null}

              {blockchainDesignWeekend ? (
                <>
                  <i className="click">
                  Click on any of the boxes below to select your preferred schedule *
                  </i>

                  <section className="batch" onClick={handleClick}>
                    <div className="div">
                      <h5>Morning Session: </h5>
                      <p>Saturday: 9am</p>
                    </div>

                    <div className="div">
                      <h5>Afternoon Session: </h5>
                      <p>Saturday: 2pm</p>
                    </div>

                    <div className="div">
                      <h5>Evening Session: </h5>
                      <p>Saturday: 5pm</p>
                    </div>
                  </section>
                </>
              ) : null}

              {/* D&C */}

              {blockchainCyber ? (
                <label htmlFor="learning">
                  <p>Learning:</p>

                  <div>
                    <select onChange={handleScheduleChange}>
                      <option value="">Select schedule</option>
                      <option value="blockchainCyberWeekdays">Week Days</option>
                      <option value="blockchainCyberWeekdaysWeekend">Weekend</option>
                    </select>
                  </div>
                </label>
              ) : null}

              {blockchainCyberWeekdays ? (
                <>
                  <i className="click">
                  Click on any of the boxes below to select your preferred schedule *
                  </i>

                  <section className="batch" onClick={handleClick}>
                    <div className="div">
                      <h5>Morning Session: </h5>
                      <p>
                        Monday:9am <br />
                        <br />
                        Tuesday:11am <br />
                        <br />
                        Wednessday:9am{" "}
                      </p>
                    </div>

                    <div className="div">
                      <h5>Afternoon Session</h5>
                      <p>
                        Monday:2pm <br />
                        <br />
                        Tuessday:2pm <br />
                        <br />
                        Wednessday:1pm{" "}
                      </p>
                    </div>

                    <div className="div">
                      <h5>Evening Session</h5>
                      <p>
                        Monday:4pm <br />
                        <br />
                        Tuesday:5pm <br />
                        <br />
                        Wednesday:4pm{" "}
                      </p>
                    </div>
                  </section>

                  <p className="arr-back" onClick={rev}>
                    <FaArrowCircleLeft /> Back{" "}
                  </p>
                </>
              ) : null}

              {blockchainCyberWeekdaysWeekend ? (
                <>
                  <i className="click">
                  Click on any of the boxes below to select your preferred schedule *
                  </i>

                  <section className="batch" onClick={handleClick}>
                    <div className="div">
                      <h5>Morning Session: </h5>
                      <p>Saturday: 9am</p>
                    </div>

                    <div className="div">
                      <h5>Afternoon Session: </h5>
                      <p>Saturday: 2pm</p>
                    </div>

                    <div className="div">
                      <h5>Evening Session: </h5>
                      <p>Saturday: 5pm</p>
                    </div>
                  </section>
                </>
              ) : null}

              
            </div>
          </div>
        </Modal>
      </div>
    </div>

    <Footer />
  </div>
  )
}

export default BlockchainEnroll