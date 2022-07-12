import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "./Form.css";
function Form() {
  const [mobileNo, setMobileNo] = useState();

  return (
    <div>
      <form>
        <div className="form">
          <h1>Enter Vendor's Detail</h1>
         
          <div className="form-input">
            <div className="input">
                <input
                  className="vendor-form-input"
                  type="text"
                  name=""
                  required
                  placeholder="Enter Vendor's Name"
                />
            </div>
            <input
              className="vendor-form-input"
              type="text"
              name=""
              required
              placeholder="Enter Aadhar Number"
              size={16}
            />
            <br/>
            <div id="inp-phone">
                <PhoneInput
                  placeholder="Enter Mobile No"
                  value={mobileNo}
                  onChange={setMobileNo}
                  defaultCountry="IN"
                  size={10}
                />
            </div>
           
            <input
              className="vendor-form-input"
              type="email"
              name=""
              required
              placeholder="Enter Email"
            />
           
            <input
              className="vendor-form-input"
              type="text"
              name=""
              required
              placeholder="Address Line 1"
              maxLength={30}
            />
           
            <input
              className="vendor-form-input"
              type="text"
              name=""
              placeholder="Address Line 2"
              maxLength={30}
            />
           
            <input
              className="vendor-form-input"
              type="number"
              name=""
              required
              placeholder="Enter STD/Pincode"
            />
           
            <input
              className="vendor-form-input"
              type="text"
              name=""
              required
              placeholder="Enter city"
            />
           
            <input
              className="vendor-form-input"
              type="text"
              name=""
              required
              placeholder="Enter Country"
            />
           
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
