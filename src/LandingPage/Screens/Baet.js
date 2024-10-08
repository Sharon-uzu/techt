import React,{useState, useEffect} from 'react'
import Header from '../Components/Header'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Supabase } from "../../config/supabase-config";
import { Link, useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";


const Baet = () => {

    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(50000*100);
    const [pay, setPay] = useState(false);
    const [submit, setSubmit] = useState(true);

    const navigate = useNavigate();

    const [course, setCourse] = useState('Business Analytics Executive Training');
    const initialValues = {
        fullname: "",
        email: "",
        gender: "",
        amount: "50,000",
        course: "Business Analytics Executive Training",
        phone: "",
        industry: "",
        
      };

      const [formData, setFormData] = useState(initialValues);

      const [formErrors, setFormErrors] = useState({});
    
      const [isSubmit, setIsSubmit] = useState(false);

      const config = {
        reference: new Date().getTime(),
        email: formData.email,
        amount: amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: "pk_live_185276b835464f18b9d118ef625714e653512423", 
      };

      const handleAmountChange = (e) => {
        setAmount(e.target.value);
        setFormData({
          ...formData,
          amount: amount,
        });
      };

      // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    dataBase();
  }; 

  const dataBase = (values) => {
    
    Supabase.from("baet")
      .upsert([
        {
          fullname: formData.fullname,
          email: formData.email,
          metadata: formData,
        },
      ])
      
      .then((response) => {
        console.log(response);
        alert("Submission successful!");
      
          // Reset the form after successful submission
          setFormData(initialValues);
          });
        }
  


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
    
      const handleChange = (e) => {
        // const {fullname, value} = e.target;
        setFormData({ ...formData, fullname: e.target.value });
        console.log(formData);
      };

      const [inputValue, setInputValue] = useState("");


      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleSubmit = (e) => {
        setFormErrors(validate(formData));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formData);
        }
      }, [formErrors]);

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
       if (!values.fullname) {
          errors.fullname = "Full name is required";
        } else if (!values.phone) {
          errors.phone = "Phone number is required";
        } else if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email";
        } else if (!values.gender) {
          errors.gender = "Select your gender";
        }else if (!values.industry) {
            errors.industry = "Select your industry";
          }else{
                setPay(true)
                setSubmit(false)
                  }
            return errors;
          };

  return (
    <div>
        <Header/>

        <div className="baet-form">
            <div className="b-f-c">
                <div className="b-l">
                    <div className="b-l-c">
                        <h2>Business Analytics Executive Training</h2>
                        <p>An in-depth Masterclass designed to empower business leaders with the skills and insights needed to leverage business analytics for strategic and data-driven decision-making and growth. 
                            Unlock the power of data with real-world case studies from top companies in industries. Get to the bottom of how to apply these insights in order to jumpstart growth and innovation at your own company. 
                            Join this MASTERCLASS and arm yourself with the edge you need to research your competition, how to grow your customers and keep them engaged and making profit through data driven, intelligent decision making.</p>

                        <div className="highlight">
                            <h3>HIGHLIGHTS</h3>
                            <span>
                                <IoIosCheckmarkCircle className='h-i'/>
                                Customers Insights
                            </span>
                            <span>
                                <IoIosCheckmarkCircle className='h-i'/>
                                Business Operation Efficiency
                            </span>
                            <span>
                                <IoIosCheckmarkCircle className='h-i'/>
                                Financial Analysis
                            </span>
                            <span>
                                <IoIosCheckmarkCircle className='h-i'/>
                                Sales
                            </span>
                            <span>
                                <IoIosCheckmarkCircle className='h-i'/>
                                Marketing
                            </span>
                        </div>



                    </div>
                </div>

                <div className="b-r">
                    <div className="b-r-c">
                        <h3>Enroll For BAET</h3>

                        <input type="text" placeholder='Full Name'
                        value={formData.fullname}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            fullname: e.target.value,
                          });
                        }}/>
                        <p style={{ color: "red", fontSize: "14px" }}>
                            {formErrors.fullname}
                        </p>
                        <input type="email" placeholder='Email'
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          });
                        }}/>
                        <p style={{ color: "red", fontSize: "14px" }}>
                        {formErrors.email}
                        </p>
                        <input type="tel" placeholder='Phone Number'
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          });
                        }}/>
                        <p style={{ color: "red", fontSize: "14px" }}>
                            {formErrors.phone}
                        </p>
                        <select name="" id=""
                        value={formData.gender}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            gender: e.target.value,
                          });
                        }}>
                            <option value={null}>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <p style={{ color: "red", fontSize: "14px" }}>
                        {formErrors.gender}
                        </p>
                        
                        <div className="amt">
                            <div className="amt-c">
                                <h6>Business Analytics Executive Training</h6>
                            </div>
                            
                        </div>
                        <p>Amount</p>
                        <div className="amt">
                            <div className="amt-c">
                                <h6 className='disc'>₦75,000</h6>
                                <h6>₦50,000</h6>
                            </div>
                            
                        </div>
                        <select name="" id=""
                        value={formData.industry}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            industry: e.target.value,
                          });
                        }}>
                            <option value={null}>Select Industry</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Fashion/design">Fashion/Design</option>
                            <option value="Tech">Tech</option>
                            <option value="Oil/gas">Oil/Gas</option>
                            <option value="Entertainment">Entertainment/Art</option>
                            <option value="Government">Government</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Health">Health</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Food">Food</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Banking/Finance">Banking/Finance</option>
                            <option value="Transportation/Logistics">Transportation/Logistics</option>
                            <option value="Education/Academics">Education/Academics</option>
                            <option value="Science">Science</option>
                            <option value="others">Others</option>
                        </select>
                        <p style={{ color: "red", fontSize: "14px" }}>
                        {formErrors.industry}
                        </p>

                        { submit ? (<button style={{cursor:'pointer'}} onClick={handleSubmit}>Enroll</button>):null}

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
                      ) : null
                        }
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Baet