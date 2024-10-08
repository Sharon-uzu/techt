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
  // usePaystackPayment,
   PaystackButton } from "react-paystack";

const Enroll = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [pay, setPay] = useState(false);


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
    payment:""
  };


  const navigate = useNavigate();
  
  const [formData, setFormData] = useState(initialValues);

  const config = {
    reference: new Date().getTime(),
    email: formData.email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_0ae598740dd4cbdfc0b09614de18230643765609", 
  };

  const dataBase = (e) => {
    Supabase.from("techtan")
      .upsert([
        {
          fullname: formData.fullname,
          email: formData.email,
          amount: amount,
          metadata: formData,
        },
      ])
      .then((response) => {
        console.log(response);
        navigate("/");
      });
  };

  
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    // const selectedValue = e.target.value;
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

  const referralCodes = ["REF123", "DISCOUNT40", "SAVE40"]; // Array of valid referral codes


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
    const selectedPayment = formData.payment; // Retrieve selected payment option from form data

    const selectedValue = event.target.value;
    
    setSelectedCourse(selectedValue);

    // if (selectedValue !== "") {
    //   setIsModalOpen(!isModalOpen);
    //   setAmount("00.00");
    // }

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


    setAmountBasedOnpaymentPlan(selectedValue, selectedPayment);

    setFormData({
      ...formData,
      amount: amount,
      course: selectedValue,
    });

   
  

  };

 
  
function setAmountBasedOnpaymentPlan(selectedValue, selectedPayment){
  // if (selectedPayment == "") {
  //   alert('please choose a payment method')

  // }else if (selectedValue == "") {
  //   alert('please choose a course')

  // }else
   if (selectedValue === "productDesign" && selectedPayment === "full") {
    setAmount(175000); 
    setIsModalOpen(!isModalOpen);

  }else if (selectedValue === "productDesign" && selectedPayment === "part") {
    setAmount(80000);
    setIsModalOpen(!isModalOpen);

  } else if (selectedValue === "frontend" && selectedPayment === "full") {
    setAmount(250000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "frontend" && selectedPayment === "part") {
    setAmount(125000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "dc" && selectedPayment === "full") {
    setAmount(150000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "dc" && selectedPayment === "part") {
    setAmount(75000);
    setIsModalOpen(!isModalOpen);
  } else if (selectedValue === "backend" && selectedPayment === "full") {
    setAmount(300000);
    setIsModalOpen(!isModalOpen);
  } else if (selectedValue === "backend" && selectedPayment === "part") {
    setAmount(150000);
    setIsModalOpen(!isModalOpen);
  } else if (selectedValue === "fullstack" && selectedPayment === "full") {
    setAmount(500000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "fullstack" && selectedPayment === "part") {
    setAmount(250000);
    setIsModalOpen(!isModalOpen);
  } else if (selectedValue === "datascience" && selectedPayment === "full") {
    setAmount(350000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "datascience" && selectedPayment === "part") {
    setAmount(175000);
    setIsModalOpen(!isModalOpen);
  } else if (selectedValue === "dataAnalysis" && selectedPayment === "full") {
    setAmount(150000);
    setIsModalOpen(!isModalOpen);
  } else if (selectedValue === "dataAnalysis" && selectedPayment === "part") {
    setAmount(75000);
    setIsModalOpen(!isModalOpen);
  } else if (selectedValue === "cybersecurity" && selectedPayment === "full") {
    setAmount(250000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "cybersecurity" && selectedPayment === "part") {
    setAmount(125000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "productmgt" && selectedPayment === "full") {
    setAmount(175000);
    setIsModalOpen(!isModalOpen);
  }else if (selectedValue === "productmgt" && selectedPayment === "part") {
    setAmount(88000);
    setIsModalOpen(!isModalOpen);
  }
}



  // const handleUpload = (e) => {
  //   setFormData({
  //     ...formData,
  //     course: e.target.value,
  //   });
  // };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.referralCode && !referralCodes.includes(formData.referralCode)) {
      alert("Invalid referral code.");
    } else if (formData.payment === "part" && formData.referralCode) {
      alert("Referral code is only applicable for full payment.");
    } else {
      if (formData.referralCode && formData.payment === "full") {
        setAmount(amount * 0.6); // Apply 40% discount
      }
      dataBase();
    }
  };

  const handleReferralChange = (event) => {
    setFormData({
      ...formData,
      referralCode: event.target.value,
    });
  };

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
                    <option value="">Select Course</option>
                    <option value="productDesign">Product Design</option>
                    <option value="dc">
                      Digital Marketing & Content Creation
                    </option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="dataAnalysis">Data Analysis</option>
                    <option value="datascience">Data Science</option>
                    <option value="fullstack">Fullstack Web Developmaent</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="productmgt">Product Management</option>
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
              <p>Classes Begin: 1st July,2024</p>
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
              <p>Classes Begin: 1st September,2024</p>
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
              <p>Classes Begin: 1st November,2024</p>
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


        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enroll;
