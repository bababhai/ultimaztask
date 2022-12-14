import React, { useState } from "react";
import InputText from "./input/InputText";
import axios from "axios";
import { Link, redirect,useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const {redirect, setRedirect} = useState(false);
   const onChangeFormInputs = (event) => {
  //console.log('In Registration' , event);
      //setFormData({[event.target.name] : event.target.value});
      setFormData(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
       }));
   }

   
   const submitHandler = (event) => {
    event.preventDefault();
    axios({
  
        // Endpoint to send files
        url: "https://lobster-app-ddwng.ondigitalocean.app/user/login",
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
            console.log('results' , res);
            if (res.data.status) {
               // setRedirect(true);
               sessionStorage.setItem('userData', JSON.stringify(res.data.message));

               navigate('/dashboard'); 
                //history.push('/dashboard');
             //   sessionStorage.setItem('userData', res.data.message);
            }
         })
    
        // Catch errors if any
        .catch((err) => { });
    }
// if (redirect) {
//  return redirect('/dashboard');
// }
  return (
    <div>
      <div className="gen_form">
        <form  onSubmit={submitHandler}>
          
        <InputText placeholder="User Name" name="login_id" type="text" onChangeFormInput={onChangeFormInputs} />

        <InputText placeholder="Password" name="password" type="password" onChangeFormInput={onChangeFormInputs} />

          <div className="input_txt">
          <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <p className="signuplink">don't have account <Link to="/registration">Sign up</Link> here!</p>
    </div>
  );
};

export default Login;
