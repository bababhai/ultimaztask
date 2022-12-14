import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputText from "./input/InputText";
import SelectOption from "./input/SelectOption";
import axios from "axios";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const initialValues = {
    full_name: "",
    username: "",
    password: "",
    country_row_id: "",
    email_id: "",
    mobile_number: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  const onChangeFormInputs = (event) => {
    //console.log('In Registration' , event);
    //setFormData({[event.target.name] : event.target.value});
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  //console.log('formdata' , formData);
  const submitHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
   // alert("this hit");
    axios({
      // Endpoint to send files

      url: "https://lobster-app-ddwng.ondigitalocean.app/user/register",
      method: "POST",
      headers: {
        // Add any auth token here
        api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
      },

      // Attaching the form data
      data: formData,
    })
      // Handle the response from backend here
      .then((res) => {
        console.log("results", res);

        if (res.data.status) {
          sessionStorage.setItem("userData", JSON.stringify(res.data.message));

          //setMessage("User Registered Successfully!");
          alert("User Registered Successfully!");
          navigate("/login");
        }
      })

      // Catch errors if any
      .catch((err) => {});
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.full_name) {
      errors.full_name = "Full Name is required!";
    }
    if (!values.username) {
      errors.username = "User Name is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    else if (values.password < 4) {
      errors.password = "Password must be more than 4 charactor.";
    }
    else if (values.password > 10) {
      errors.password = "Password cannot exceed more than 10 charactor.";
    }
    if (!values.email_id) {
      errors.email_id = "Email id is required!";
    } 
    else if (!regex.test(values.email_id)) {
      errors.email_id = "not a valid Email.";
    }
    if (!values.mobile_number) {
      errors.mobile_number = "Mobile Number is required!";
    }
    return errors;
  };

  return (
    <div>
      <div className="gen_form">
        {/* <div>{message}</div> */}
        <form onSubmit={submitHandler}>
          <InputText
            // onChange={handleChange}
            placeholder="Full Name"
            name="full_name"
            type="text"
            onChangeFormInput={onChangeFormInputs}
          />

          <p className="formValidationError">{formErrors.full_name}</p>

          <InputText
            // onChange={handleChange}
            placeholder="User Name"
            name="username"
            type="text"
            onChangeFormInput={onChangeFormInputs}
          />
          <p className="formValidationError">{formErrors.username}</p>
          <InputText
            //    onChange={handleChange}
            placeholder="Password"
            name="password"
            type="password"
            onChangeFormInput={onChangeFormInputs}
          />
          <p className="formValidationError">{formErrors.password}</p>
          <SelectOption
            name="country_row_id"
            //  onChange={handleChange}
            onChangeFormInput={onChangeFormInputs}
          />
          <p className="formValidationError">{formErrors.country_row_id}</p>
          <InputText
            //onChange={handleChange}
            placeholder="Email Id"
            name="email_id"
            type="text"
            onChangeFormInput={onChangeFormInputs}
          />
          <p className="formValidationError">{formErrors.email_id}</p>
          <InputText
            //onChange={handleChange}
            placeholder="Mobile Number"
            name="mobile_number"
            type="text"
            onChangeFormInput={onChangeFormInputs}
          />
          <p className="formValidationError">{formErrors.mobile_number}</p>
          <div className="input_txt">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <p className="signuplink">
        already have account <Link to="/login">Login</Link> here!
      </p>
    </div>
  );
}

export default Registration;
