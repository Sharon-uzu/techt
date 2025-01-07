import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import vector from "../../Images/Vector 1.png";
import Modal from "react-modal";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Supabase } from "../../config/supabase-config";
import {  useNavigate } from "react-router-dom";

import { 
   PaystackButton } from "react-paystack";

const Enroll = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [pay, setPay] = useState(false);
  const [selectedPayment, setSelectedPaymentText] = useState('');

  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
    amount: "",
    schedule: "",
    session: "",
    batch: "",
    payment:'',
    code: ""
  };

  const referralCodes = ["REF123", "DISCOUNT40", "SAVE40", 'George-Tech', 'Bimsa-Tech', 'Leonard-Tech', 'Confi-Tech', 'Kobo-Tech', 'Jago-Tech', 'Emmy-Tech', 'Best-Tech', 'Mathew-Tech', 'Edisemi-Tech', 'Chioma-Tech', 'Vivy-Tech', 'Som-Tech', 'Joyce-Tech', 'Felly-Tech', 'Leslie-Tech', 'Kingsley-Tech', 'Pepple-Tech', 'Mike-Tech', 'Soky-Tech', 'Tuka-Tech', 'Ibim-Tech', 'Ndume-Tech', 'George-Tech', 'Ruth-Tech', 'Dorcas-Tech', 'Ola-Tech','Bethel-Tech', 'Fuby-Tech', 'Ice-Tech', 'Oluchi-Tech', 'Tammy-Tech', 'Roy-Tech', 'Nnah-Tech', 'Nwakanma-Tech', 'Anita-Tech', 'Fran-Tech','Chis-Tech', 'Felly-Tech', 'Brian-Tech', ];

  const navigate = useNavigate();
 

  const [formData, setFormData] = useState(initialValues);


  const config = {
    reference: new Date().getTime(),
    email: formData.email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_live_185276b835464f18b9d118ef625714e653512423", 
  };


    const [inputValue, setInputValue] = useState("");

    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
   
    //   };

  //  const checkInputAgainstArray = (input) => {
  //   return referralCodes.some((value) => value === input);
  // };

  const dataBase = (values) => {
    
    Supabase.from("techtan-reg")
      .upsert([
        {
          fullname: formData.fullname,
          email: formData.email,
          code:inputValue,
          metadata: formData,
        },
      ])
      
      .then((response) => {
        console.log("inderted....")
        console.log(response);
                              
        navigate("/");
        });
      }

      const handleAmountChange = (e) => {  
        setAmount(e.target.value);  
        setFormData({  
          ...formData,  
          amount: e.target.value,  
        });  
      };  


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto"; // Enable scrolling
  }, [pathname]);

  const [course, setCourse] = useState(true);
  const [schedule, setSchedule] = useState(false);

  const [product, setProduct] = useState(false);
  const [front, setFront] = useState(false);
  const [dc, setDc] = useState(false);
  const [back, setBack] = useState(false);
  
  const [fullstack, setFullstack] = useState(false);
  const [productMgt, setProductMgt] = useState(false);
  const [data, setData] = useState(false);
  const [cyber, setCyber] = useState(false);
  const [dataScience, setDataScience] = useState(false);

  const [full, setFull] = useState(false);
  const [part, setPart] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [selectedText, setSelectedText] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const checkInputAgainstArray = (input) => referralCodes.includes(input);  

  // Update amount based on selected course and payment plan  
  function setAmountBasedOnPaymentPlan(selectedValue, selectedPayment) {  
    const originalPrices = {  
      productDesign: 175000,  
      frontend: 250000,  
      dc: 150000,  
      backend: 300000,  
      fullstack: 500000,  
      datascience: 350000,  
      dataAnalysis: 150000,  
      cybersecurity: 250000,  
      productmgt: 175000  
      // Additional course prices...  
    };  

    if (selectedPayment === 'full') {  
      if (checkInputAgainstArray(inputValue)) {  
        const discountedAmount = originalPrices[selectedValue] * 0.6;  
        setAmount(discountedAmount);  
        setFormData(prev => ({ ...prev, amount: discountedAmount }));  
      } else {  
        setAmount(originalPrices[selectedValue]);  
        setFormData(prev => ({ ...prev, amount: originalPrices[selectedValue] }));  
      }  
    } else if (selectedPayment === 'part') {  
      const halfAmount = originalPrices[selectedValue] * 0.5;  
        setAmount(halfAmount);  
        setFormData(prev => ({ ...prev, amount: halfAmount })); 
        
    }  
  }  

  const handleSelectChange = (event) => {  
    const selectedValue = event.target.value; // Declare and initialize selectedValue first  
    const selectedPayment = formData.payment; // Retrieve the current selected payment option  

    setFormData(prev => ({ ...prev, course: selectedValue })); // Update formData with the selected course  

    // Call the function to calculate the amount based on selected course and payment plan  
    setAmountBasedOnPaymentPlan(selectedValue, selectedPayment);  
    setIsModalOpen(!isModalOpen)
    setSelectedText(event.target.selectedOptions[0].textContent);

    setSelectedCourse(selectedValue)

    // Set showComponent1 and showComponent2 based on the selected option
    setProduct(selectedValue === "productDesign");
    setFront(selectedValue === "frontend");
    setDc(selectedValue === "dc");
    setBack(selectedValue === "backend");
    setFullstack(selectedValue === "fullstack");
    setDataScience(selectedValue === "datascience");
    setData(selectedValue === "dataAnalysis");
    setCyber(selectedValue === "cybersecurity");
    setProductMgt(selectedValue === "productmgt");
    setFull(selectedPayment === "full");
    setPart(selectedPayment === "part");
  };  

  const handlePaymentPlanChange = (event) => {  
    const selectedPayment = event.target.value;  
    setFormData(prev => ({ ...prev, payment: selectedPayment }));  
    setAmountBasedOnPaymentPlan(formData.course, selectedPayment); // Recalculate amount based on selected course  
    setSelectedPaymentText(event.target.selectedOptions[0].textContent);
  };  

  const handleInputChange = (event) => {  
    setInputValue(event.target.value);  
  };  

 

  

  const handleReferralChange = (event) => {
    setFormData({
      ...formData,
      referralCode: event.target.value,
    });
  };


  

  
// function setAmountBasedOnpaymentPlan(selectedValue, selectedPayment){
//   if (inputValue.trim() !== "" && !checkInputAgainstArray(inputValue)) {
//     alert(inputValue + " is an invalid code")
//     return;
//   }
//    else if (selectedValue === "productDesign" && selectedPayment === "full") {
//     setAmount(175000); 
//     setIsModalOpen(!isModalOpen);
//     return;

//   }else if (selectedValue === "productDesign" && selectedPayment === "full" && inputValue) {
    
//     setAmount(175000*0.6); 
//     setIsModalOpen(!isModalOpen);
//     return;

//   }else if (selectedValue === "frontend" && selectedPayment === "full") {
//     setAmount(250000);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }if (selectedValue === "frontend" && selectedPayment === "full" && inputValue) {
//     setAmount(250000*0.6);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }else if (selectedValue === "dc" && selectedPayment === "full") {
//     setAmount(150000);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }if (selectedValue === "dc" && selectedPayment === "full" && inputValue) {
//     setAmount(150000*0.6);
//     setIsModalOpen(!isModalOpen);
//     return;

//   } else if (selectedValue === "backend" && selectedPayment === "full") {
//     setAmount(300000);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }if (selectedValue === "backend" && selectedPayment === "full" && inputValue) {
//     setAmount(300000*0.6);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }else if (selectedValue === "fullstack" && selectedPayment === "full") {
//     setAmount(500000);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }if (selectedValue === "fullstack" && selectedPayment === "full" && inputValue) {
//     setAmount(500000*0.6);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }else if (selectedValue === "datascience" && selectedPayment === "full") {
//     setAmount(350000);
//     setIsModalOpen(!isModalOpen);
//     return;

//   }if (selectedValue === "datascience" && selectedPayment === "full" && inputValue) {
//     setAmount(350000*0.6);
//     setIsModalOpen(!isModalOpen);
//     return;
    
//   }else if (selectedValue === "dataAnalysis" && selectedPayment === "full") {
//     setAmount(150000);
//     setIsModalOpen(!isModalOpen);
//   }if (selectedValue === "dataAnalysis" && selectedPayment === "full" && inputValue) {
//     setAmount(150000*0.6);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "cybersecurity" && selectedPayment === "full") {
//     setAmount(250000);
//     setIsModalOpen(!isModalOpen);
//   }if (selectedValue === "cybersecurity" && selectedPayment === "full" && inputValue) {
//     setAmount(250000*0.6);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "productmgt" && selectedPayment === "full") {
//     setAmount(175000);
//     setIsModalOpen(!isModalOpen);
//   }if (selectedValue === "productmgt" && selectedPayment === "full" && inputValue) {
//     setAmount(175000*0.6);
//     setIsModalOpen(!isModalOpen);
//   } else if (selectedValue === "productDesign" && selectedPayment === "part" && inputValue) {
//     setAmount(90000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);

//   }else if (selectedValue === "frontend" && selectedPayment === "part" && inputValue) {
//     setAmount(125000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "dc" && selectedPayment === "part" && inputValue) {
//     setAmount(75000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   } else if (selectedValue === "backend" && selectedPayment === "part" && inputValue) {
//     setAmount(150000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "fullstack" && selectedPayment === "part" && inputValue) {
//     setAmount(250000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "datascience" && selectedPayment === "part" && inputValue) {
//     setAmount(175000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "dataAnalysis" && selectedPayment === "part" && inputValue) {
//     setAmount(75000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "cybersecurity" && selectedPayment === "part" && inputValue) {
//     setAmount(125000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "productmgt" && selectedPayment === "part" && inputValue) {
//     setAmount(88000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "productDesign" && selectedPayment === "part" && inputValue) {
//     setAmount(90000);
//     alert("Referral code is only applicable for full payment, refresh and input code again with full payment plan.");
//     setIsModalOpen(!isModalOpen);

//   }else if (selectedValue === "productDesign" && selectedPayment === "part") {
//     setAmount(90000);
//     setIsModalOpen(!isModalOpen);

//   } else if (selectedValue === "frontend" && selectedPayment === "part") {
//     setAmount(125000);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "dc" && selectedPayment === "part") {
//     setAmount(75000);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "backend" && selectedPayment === "part") {
//     setAmount(150000);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "fullstack" && selectedPayment === "part") {
//     setAmount(250000);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "datascience" && selectedPayment === "part") {
//     setAmount(175000);
//     setIsModalOpen(!isModalOpen);
//   } else if (selectedValue === "dataAnalysis" && selectedPayment === "part") {
//     setAmount(75000);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "cybersecurity" && selectedPayment === "part") {
//     setAmount(125000);
//     setIsModalOpen(!isModalOpen);
//   }else if (selectedValue === "productmgt" && selectedPayment === "part") {
//     setAmount(88000);
//     setIsModalOpen(!isModalOpen);
//   }
// }
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

  const [productWeekdays, setProductWeekdays] = useState(false);
  const [frontWeekdays, setFrontWeekdays] = useState(false);
  const [dcWeekdays, setDcWeekdays] = useState(false);
  const [backWeekdays, setBackWeekdays] = useState(false);
  
  const [dataWeekdays, setDataWeekdays] = useState(false);
  const [cyberWeekdays, setCyberWeekdays] = useState(false);

  const [datascienceWeekdays, setDatascienceWeekdays] = useState(false);
  const [fullstackWeekdays, setFullstackWeekdays] = useState(false);
  const [productmgtWeekdays, setProductmgtWeekdays] = useState(false);

  const [productWeekend, setProductWeekend] = useState(false);
  const [frontWeekend, setFrontWeekend] = useState(false);
  const [dcWeekend, setDcWeekend] = useState(false);
  const [backWeekend, setBackWeekend] = useState(false);
  
  const [dataWeekend, setDataWeekend] = useState(false);
  const [cyberWeekend, setCyberWeekend] = useState(false);

  const [datascienceWeekend, setDatascienceWeekend] = useState(false);
  const [fullstackWeekend, setFullstackWeekend] = useState(false);
  const [productmgtWeekend, setProductmgtWeekend] = useState(false);

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
    setProductWeekdays(selectedValue === "productweekdays");
    setProductWeekend(selectedValue === "productweekend");

    setCyberWeekdays(selectedValue === "cyberWeekdays");
    setCyberWeekend(selectedValue === "cyberWeekend");
    setFrontWeekdays(selectedValue === "frontweekdays");
    setFrontWeekend(selectedValue === "frontweekend");
    setDcWeekdays(selectedValue === "dcWeekdays");
    setDcWeekend(selectedValue === "dcWeekend");
    setBackWeekdays(selectedValue === "backWeekdays");
    setBackWeekend(selectedValue === "backWeekend");
    setDataWeekdays(selectedValue === "dataWeekdays");
    setDataWeekend(selectedValue === "dataWeekend");

    setDatascienceWeekdays(selectedValue === "datascienceWeekdays");
    setDatascienceWeekend(selectedValue === "datascienceWeekend");
    setFullstackWeekdays(selectedValue === "fullstackweekdays");
    setFullstackWeekend(selectedValue === "fullstackweekend");
    setProductmgtWeekdays(selectedValue === "productmgtWeekdays");
    setProductmgtWeekend(selectedValue === "productmgtWeekend");
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

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.fullname}
            </p> */}
          </label>

          <label htmlFor="course">
            <p>Email:</p>
            <div>
              <input
                type="email"
                // onChange={handleEmailChange}
                // value={email}
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

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.email}
            </p> */}
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

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.phone}
            </p> */}
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

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.gender}
            </p> */}
          </label>

         

          <label>  
        <p>Referral code:</p>  
        <div>

        
          <input  
            type="text"  
            value={inputValue}  
            onChange={handleInputChange}  
            placeholder="Get 40% discount of the course full price with a referral code"  
          /> 
        </div> 
      </label>  

      <label htmlFor="payment">  
        <p>Payment Plan:</p> 
        <div> 
          <select id="payment" value={formData.payment} onChange={handlePaymentPlanChange}>  
            <option value=''>Select payment plan</option>  
            <option value="full">Full payment</option>  
            <option value="part">Part payment</option>  
          </select>  
        </div>
      </label>  

      <label htmlFor="course">  
        <p>Courses:</p> 
        <div> 
          <select id="selectOption" onChange={handleSelectChange}>  
            <option value="">Select Course</option>  
            <option value="productDesign">Product Design</option>  
            <option value="dc">Digital Marketing & Content Creation</option>  
            <option value="frontend">Frontend Development</option>  
            <option value="backend">Backend Development</option>  
            <option value="dataAnalysis">Data Analysis</option>  
            <option value="datascience">Data Science</option>  
            <option value="fullstack">Fullstack Web Development</option>  
            <option value="cybersecurity">Cybersecurity</option>  
            <option value="productmgt">Product Management</option>  
          </select>  
        </div>
      </label>  

      <label htmlFor="amount">  
        <p>Amount:</p>  
        <div>
          <input type="text" value={amount} readOnly />  
        </div>
      </label>  

          {/* <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                        <select>
                            <option value="weekdays">Week Days</option>
                            <option value="weekend">Weekend</option>

                        </select>
                    </div>
                    
                </label> */}

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
                      Payment Plan: <span>{selectedPayment}</span>
                    </h4>
                    <h4>
                      Schedule: <span>{scheduleText}</span>
                    </h4>
                    

                    {clickedContent && (
                      <div>
                        <h4>Session: <span>{clickedContent}</span></h4>
                        {/* Output all content */}
                        
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

          <section className="batch" disabled>
            <div
              className="div"
              style={{
                backgroundColor: time1 ? "#232B58" : "#fff",
                color: time1 ? "#fff" : "#000",
              }}
            >
              <h5>Cohort 1</h5>
              <p>Classes Begin: 17th February, 2025</p>
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
              <p>Classes Begin: 14th April, 2025</p>
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

            <div
              className="div"
              style={{
                backgroundColor: time3 ? "#232B58" : "#fff",
                color: time3 ? "#fff" : "#000",
              }}
            >
              <h5>Cohort 3</h5>
              <p>Classes Begin: 7th July, 2025</p>
              <button
                type="button"
                onClick={() => {
                  activate3();
                }}
              >
                Select
              </button>

              {dk ? <div className="dk"></div> : null}
            </div>
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

                {product ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="productweekdays">Week Days</option>
                        <option value="productweekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {productWeekdays ? (
                  <>
                    <i className="click">
                    Click on any of the boxes below to select your preferred schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Tuesday:11am <br />
                          <br />
                          Wednessday:11am <br />
                          <br />
                          Friday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Tuesday:3pm <br />
                          <br />
                          Wednessday:3pm <br />
                          <br />
                          Friday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:5pm <br />
                          <br />
                          Wednessday:5pm <br />
                          <br />
                          Friday:5pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {productWeekend ? (
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

                {front ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="frontweekdays">Week Days</option>
                        <option value="frontweekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {frontWeekdays ? (
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
                          Wednessday:9am <br />
                          <br />
                          Friday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:1pm <br />
                          <br />
                          Tuessday:1pm <br />
                          <br />
                          Thursday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday: 5pm <br />
                          <br />
                          Wednessday: 5pm <br />
                          <br />
                          Friday: 5pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {frontWeekend ? (
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

                {dc ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="dcWeekdays">Week Days</option>
                        <option value="dcWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {dcWeekdays ? (
                  <>
                    <i className="click">
                    Click on any of the boxes below to select your preferred schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Wednessday:11am <br />
                          <br />
                          Friday:11am <br />
                          
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:3pm <br />
                          <br />
                          Wednessday:3pm <br />
                          
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:5pm <br />
                          <br />
                          Friday:5pm <br />
                          
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {dcWeekend ? (
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

                {/* BACKEND */}

                {back ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="backWeekdays">Week Days</option>
                        <option value="backWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {backWeekdays ? (
                  <>
                    <i className="click">
                    Click on any of the boxes below to select your preferred schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:11am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Thursday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Tuesday:3pm <br />
                          <br />
                          Thursday:3pm <br />
                          <br />
                          Friday:3pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Tuesday:5pm <br />
                          <br />
                          Thursday:5pm <br />
                          <br />
                          Friday:5pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {backWeekend ? (
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

                {/* Data Analysis */}

                {data ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="dataWeekdays">Week Days</option>
                        <option value="dataWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {dataWeekdays ? (
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
                          Wednessday:9am <br />
                          <br />
                          Friday:11am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:1pm <br />
                          <br />
                          Wednessday:1pm <br />
                          <br />
                          Friday:3pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:5pm <br />
                          <br />
                          Wednessday:5pm <br />
                          <br />
                          Friday:5pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {dataWeekend ? (
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

                {/* fullstack */}

                {fullstack ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="fullstackweekdays">Week Days</option>
                        <option value="fullstackweekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {fullstackWeekdays ? (
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
                          Wednessday:9am <br />
                          <br />
                          Friday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:1pm <br />
                          <br />
                          Tuessday:1pm <br />
                          <br />
                          Thursday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:5pm <br />
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

                {fullstackWeekend ? (
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

                {/* Data science */}

                {dataScience ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="datascienceWeekdays">Week Days</option>
                        <option value="datascienceWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {datascienceWeekdays ? (
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
                          Wednessday:9am <br />
                          <br />
                          Friday:11am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:1pm <br />
                          <br />
                          Wednessday:1pm <br />
                          <br />
                          Friday:3pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:5pm <br />
                          <br />
                          Wednessday:5pm <br />
                          <br />
                          Friday:5pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {datascienceWeekend ? (
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


                {/* Product Management */}

                {productMgt ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="productmgtWeekdays">Week Days</option>
                        <option value="productmgtWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {productmgtWeekdays ? (
                  <>
                    <i className="click">
                    Click on any of the boxes below to select your preferred schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          
                          Tuesday:9am <br />
                          <br />
                          Thursday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          
                          Wednessday:1pm <br />
                          <br />
                          Friday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:5pm <br />
                          <br />
                          Wednessday:5pm <br />
                          <br />
                          Friday:5pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {productmgtWeekend ? (
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

                {/* Cybersecurity */}

                {cyber ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="cyberWeekdays">Week Days</option>
                        <option value="cyberWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {cyberWeekdays ? (
                  <>
                    <i className="click">
                    Click on any of the boxes below to select your preferred schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:11am <br />
                          <br />
                          Tuesday:9am <br />
                          <br />
                          Thursday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:3pm <br />
                          <br />
                          Tuessday:1pm <br />
                          <br />
                          Thursday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Tuesday:5pm <br />
                          <br />
                          Thursday:5pm <br />
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

                {cyberWeekend ? (
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
  );
};

export default Enroll;
